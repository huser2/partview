/**
 * 
 */

/* Get values for the parsed URL */

jQuery.extend({
	getValues : function(url) {
		var result = null;
		$.ajax({
			url : url,
			type : 'get',
			dataType : 'json',
			async : false,
			cache : false,
			success : function(data) {
				result = data;
			}
		});
		return result;
	}
});

function processRequest(request) {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			w2ui['plmt_layout'].content('main', xmlhttp.responseText);
			// document.getElementById("loadSelectedPage").innerHTML =
			// xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", request.id, true);
	xmlhttp.send();
}

function createLayout(layoutDiv) {
	var pstyle = 'border-style:initial; solid #dfdfdf; padding: 0px;';
	var nstyle = 'border-style:initial; solid #dfdfdf; padding: 0px; color:red; top:50px;';
			
	layoutDiv.w2layout({
		name : 'plmt_layout',
		panels : [ {
			type : 'left',
			size : 200,
			top:0,
			resizable : true,
			content : '',
			title:'Main Navigation'
						
		}, {
			type : 'main',
			resizable : true,
			style : pstyle,
			title:'',
			content : loadOverView()
		} ]
	});
}

function loadOverView() {
	$.ajax({
		url : 'overview',
		success : function(data) {
			var msgtabs = w2ui['queue_tabs'];
			if (typeof msgtabs !== 'undefined') {
				msgtabs.destroy();
			}
			w2ui['plmt_layout'].content('main', data);
		}
	});

}


function createMenu(menuDiv) {
	w2ui['plmt_layout'].content('left', $().w2sidebar({
		name : 'plmt_sidebar',
		img : 'icon-folder-open',
		nodes : [ 
				{ id: 'level-4', text: 'Programs',  expanded: false, group: false,
					  nodes: [ { id: 'level-4-1', text: 'Accounts Payable' },
							   { id: 'level-4-2', text: 'Accounts Receivable' },
							   { id: 'level-4-3', text: 'General Ledger' },
							   { id: 'level-4-4', text: 'Purchase Orders' },
							   { id: 'level-4-5', text: 'Sales Orders' },
							   { id: 'level-4-6', text: 'System Manager' }
							 ]
				},
		       { id: 'level-1', text: 'System',  expanded: false, group: false,
				  nodes: [ { id: 'level-1-1', text: 'Level 1.1', icon: 'fa-home' },
						   { id: 'level-1-2', text: 'Level 1.2', icon: 'fa-star' },
						   { id: 'level-1-3', text: 'Level 1.3', icon: 'fa-check' }
						 ]
				},
				{ id: 'level-2', text: 'Transactions',  expanded: false, group: false,
				  nodes: [ { id: 'level-2-1', text: 'Level 2.1',  
							 nodes: [
							   { id: 'level-2-1-1', text: 'Level 2.1.1' },
							   { id: 'level-2-1-2', text: 'Level 2.1.2' },
							   { id: 'level-2-1-3', text: 'Level 2.1.3' }
						 ]},
						   { id: 'level-2-2', text: 'Level 2.2' },
						   { id: 'level-2-3', text: 'Level 2.3' }
						 ]
				},
				{ id: 'level-3', text: 'Files',  expanded: false, group: false,
				  nodes: [ { id: 'level-3-1', text: 'Level 3.1' },
						   { id: 'level-3-2', text: 'Level 3.2' },
						   { id: 'level-3-3', text: 'Level 3.3' }
						 ]
				},
				
				{ id: 'level-5', text: 'Reports',  expanded: false, group: false,
					  nodes: [ { id: 'level-5-1', text: 'Level 3.1' },
							   { id: 'level-5-2', text: 'Level 3.2' },
							   { id: 'level-5-3', text: 'Level 3.3' }
							 ]
				}
		
		 ],
		onClick : function(event) {
			var target = event.target;
			if(target =="home_nav"){
				event.target="overview";
			}
			
			if( target!=="create_nav" && target!=="admin_nav"){
				sideBarCallBack(event);	
			}
			
		}
	}));

}

function sideBarCallBack(event) {	
	$.ajax({
		url : event.target,
		success : function(data) {
			var qtabs = w2ui['queue_tabs'];
			var admintabs = w2ui['admin_tabs'];
			if (typeof qtabs !== 'undefined') {
				qtabs.destroy();
			}
			if (typeof admintabs !== 'undefined') {
				admintabs.destroy();
			}

			w2ui['plmt_layout'].content('main', data);
		}
	});
}

function renderGrid(gridObj, gridName, event, header, columns, searches, show,
		toolbar) {

	var grid = w2ui[gridName];
	if (typeof grid !== 'undefined') {
		grid.destroy();
	}

	gridObj.w2grid({
		name : gridName,
		header : header,
		searches : searches,
		show : show,
		url : event.target,
		columns : columns,
		toolbar : toolbar
	});

}

function renderGridWithGroupColumns(gridObj, gridName, event, header, columns,
		searches, show, toolbar, groups) {

	var grid = w2ui[gridName];
	if (typeof grid !== 'undefined') {
		grid.destroy();
	}

	gridObj.w2grid({
		name : gridName,
		header : header,
		searches : searches,
		show : show,
		url : event.target,
		columns : columns,
		toolbar : toolbar,
		columnGroups : groups
	});

}

// manage attributes page
function renderPage(gridId, event) {
	$(gridId).load(event.target, function() {
		console.log("Load was performed page:." + event.target);
	});
}