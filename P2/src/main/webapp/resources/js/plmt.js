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

	layoutDiv.w2layout({
		name : 'plmt_layout',
		panels : [  {
			type : 'left',
			size : 200,
			resizable : true,
			content : '',
			title : 'Navigator'
		}, {
			type : 'main',
			resizable : true,
			style : pstyle,
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
		img : null,
		nodes : [ {
			id : 'home_nav',
			text : 'Home',
			img : 'icon-folder-open',
			expanded : false,
			group : false,
			nodes : [ {
				id : 'create_nav',
				text : 'Create',
				img: 'icon-folder',
					nodes: [
							   { id: 'create_car', text: 'Create Car', img: 'icon-page' },
							   { id: 'create_model', text: 'Create Model', img: 'icon-page' },
							   { id: 'create_part', text: 'Create Part', img: 'icon-page' }]
			}, {
				id : 'admin_nav',
				text : 'System Administration',
				img : 'icon-folder',
				nodes: [
						   { id: 'level-2-1-1-1', text: 'Create Report', img: 'icon-page' },
						   { id: 'level-2-1-2-1', text: 'Create User', img: 'icon-page' },
						   { id: 'level-2-1-3-1', text: 'Car Reports', img: 'icon-page' }]
			} ]
		} ],
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