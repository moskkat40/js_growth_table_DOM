var e=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),t=document.querySelector(".append-column"),c=document.querySelector(".remove-column"),r=document.querySelector("tbody"),o=4,n=4;e.addEventListener("click",function(){if(d.disabled=!1,o<10){var t=document.querySelector("tr").cloneNode(!0);r.append(t),o++}10===o&&(e.disabled=!0)}),d.addEventListener("click",function(){if(e.disabled=!1,o>2){var t=document.querySelector("tr");r.removeChild(t),o--}2===o&&(d.disabled=!0)}),t.addEventListener("click",function(){c.disabled=!1,n<10&&(document.querySelectorAll("tr").forEach(function(e){e.append(document.createElement("td"))}),n++),10===n&&(t.disabled=!0)}),c.addEventListener("click",function(){t.disabled=!1,n>2&&(document.querySelectorAll("tr").forEach(function(e){e.removeChild(e.querySelector("td"))}),n--),2===n&&(c.disabled=!0)});
//# sourceMappingURL=index.229fb58f.js.map
