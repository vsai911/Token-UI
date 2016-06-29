/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */

// Parallax doesn't seem to do anything -- please test. Commented out for now.

// (function($) {

//   $.fn.parallax = function(options) {

//     var windowHeight = $(window).height();

//     // Establish default settings
//     var settings = $.extend({
//         speed        : 0.15
//     }, options);

//     // Iterate over each object in collection
//     return this.each( function() {

//     	// Save a reference to the element
//     	var $this = $(this);

//     	// Set up Scroll Handler
//     	$(document).scroll(function(){

// 		    var scrollTop = $(window).scrollTop();
//         var offset = $this.offset().top;
//         var height = $this.outerHeight();

//       	// Check if above or below viewport
//     		if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
//     			return;
//     		}

//   		  var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
//         // Apply the Y Background Position to Set the Parallax Effect
//   			$this.css('background-position', 'center ' + yBgPosition + 'px');
//       });
//     });
//   }

// }(jQuery));

// $('.parallax').parallax({
// 	speed :	0.15
// });


$(document).ready(function(){
  tamingselect();
  // var contactClicked = false;
  var navbarOpen = false;
  // $('.location-contact').click(function(){
  //   // Set the effect type
  //   var effect = 'slide';
  //   // Set the options for the effect type chosen
  //   var options = { direction: 'right' };
  //   // Set the duration (default: 400 milliseconds)
  //   var duration = 500;
  //   if (contactClicked) {
  //     $(this).siblings().show();
  //     contactClicked = false;
  //     $(this).removeClass('location-contact-clicked');
  //   } else {
  //     $(this).siblings().hide();
  //     contactClicked = true;
  //     $(this).addClass('location-contact-clicked');
  //   }

  //   $('#contact-form').toggle(effect, options, duration);
  // });

  // This gets the correct CSS when the navbar button is clicked
  $('.navbar-toggle').click(function(){
    console.log(this);
    if(navbarOpen) {    
      navbarOpen = false;
      $(this).removeClass('navbar-toggle-open');
    } else {
      navbarOpen = true;
      $(this).addClass('navbar-toggle-open');
    }
  })
})

// The following changes the dropdown menu.
function tamingselect()
{
  if(!document.getElementById && !document.createTextNode){return;}
  
// Classes for the link and the visible dropdown
  var ts_selectclass='turnintodropdown';  // class to identify selects
  var ts_listclass='turnintoselect';    // class to identify ULs
  var ts_boxclass='dropcontainer';    // parent element
  var ts_triggeron='activetrigger';     // class for the active trigger link
  var ts_triggeroff='trigger';      // class for the inactive trigger link
  var ts_dropdownclosed='dropdownhidden'; // closed dropdown
  var ts_dropdownopen='dropdownvisible';  // open dropdown
/*
  Turn all selects into DOM dropdowns
*/
  var count=0;
  var toreplace=new Array();
  var sels=document.getElementsByTagName('select');
  for(var i=0;i<sels.length;i++){
    if (ts_check(sels[i],ts_selectclass))
    {
      var hiddenfield=document.createElement('input');
      hiddenfield.name=sels[i].name;
      hiddenfield.type='hidden';
      hiddenfield.id=sels[i].id;
      hiddenfield.value=sels[i].options[0].value;
      sels[i].parentNode.insertBefore(hiddenfield,sels[i])
      var trigger=document.createElement('a');
      ts_addclass(trigger,ts_triggeroff);
      trigger.href='#';
      trigger.onclick=function(){
        ts_swapclass(this,ts_triggeroff,ts_triggeron)
        ts_swapclass(this.parentNode.getElementsByTagName('ul')[0],ts_dropdownclosed,ts_dropdownopen);
        return false;
      }
      trigger.appendChild(document.createTextNode(sels[i].options[0].text));
      sels[i].parentNode.insertBefore(trigger,sels[i]);
      var replaceUL=document.createElement('ul');
      for(var j=0;j<sels[i].getElementsByTagName('option').length;j++)
      {
        var newli=document.createElement('li');
        var newa=document.createElement('a');
        newli.v=sels[i].getElementsByTagName('option')[j].value;
        newli.elm=hiddenfield;
        newli.istrigger=trigger;
        newa.href='#';
        newa.appendChild(document.createTextNode(
        sels[i].getElementsByTagName('option')[j].text));
        newli.onclick=function(){ 
          this.elm.value=this.v;
          ts_swapclass(this.istrigger,ts_triggeron,ts_triggeroff);
          ts_swapclass(this.parentNode,ts_dropdownopen,ts_dropdownclosed)
          this.istrigger.firstChild.nodeValue=this.firstChild.firstChild.nodeValue;
          return false;
        }
        newli.appendChild(newa);
        replaceUL.appendChild(newli);
      }
      ts_addclass(replaceUL,ts_dropdownclosed);
      var div=document.createElement('div');
      div.appendChild(replaceUL);
      ts_addclass(div,ts_boxclass);
      sels[i].parentNode.insertBefore(div,sels[i])
      toreplace[count]=sels[i];
      count++;
    }
  }
  
/*
  Turn all ULs with the class defined above into dropdown navigations
*/  

  var uls=document.getElementsByTagName('ul');
  for(var i=0;i<uls.length;i++)
  {
    if(ts_check(uls[i],ts_listclass))
    {
      var newform=document.createElement('form');
      var newselect=document.createElement('select');
      for(j=0;j<uls[i].getElementsByTagName('a').length;j++)
      {
        var newopt=document.createElement('option');
        newopt.value=uls[i].getElementsByTagName('a')[j].href;  
        newopt.appendChild(document.createTextNode(uls[i].getElementsByTagName('a')[j].innerHTML)); 
        newselect.appendChild(newopt);
      }
      newselect.onchange=function()
      {
        window.location=this.options[this.selectedIndex].value;
      }
      newform.appendChild(newselect);
      uls[i].parentNode.insertBefore(newform,uls[i]);
      toreplace[count]=uls[i];
      count++;
    }
  }
  for(i=0;i<count;i++){
    toreplace[i].parentNode.removeChild(toreplace[i]);
  }
  function ts_check(o,c)
  {
    return new RegExp('\\b'+c+'\\b').test(o.className);
  }
  function ts_swapclass(o,c1,c2)
  {
    var cn=o.className
    o.className=!ts_check(o,c1)?cn.replace(c2,c1):cn.replace(c1,c2);
  }
  function ts_addclass(o,c)
  {
    if(!ts_check(o,c)){o.className+=o.className==''?c:' '+c;}
  }
}




