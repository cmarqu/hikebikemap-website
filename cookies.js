function setCookie(cookieName, cookieValue, expireDate)
 {
 /* Pass in three strings - the name of the cookie, the value, and the
 expire date.
 Pass in a "" empty string for expireDate to set a session cookie
 (no expires date).
 Pass in any other date for expire as a number of days to be added
 to today's date. */
 
if (expireDate == "")
 {
 expires = "";
 }
 else
 {
 expires = new Date();
 expires.setDate(expires.getDate() + expireDate);
 expires = expires.toGMTString();
 }
 document.cookie = cookieName+"="+cookieValue+";expires="+expires;
 }
 
function removeCookie (cookieName)
 {
 /* Pass in the name of the cookie as a string and it will be removed.
 */
 expires = Now();
 document.cookie = cookieName+"= ;expires="+expires.toGMTString();
 }
 
function getCookie (cookieName)
 {
 cookieValue = ""
 if (document.cookie.indexOf(cookieName) == -1)
 {
 // there is no cookie by this name for this user
 return cookieValue;
 }
 else
 {
 // get the beginning index of the cookie by looking for the cookie name
 cookieStart = document.cookie.indexOf(cookieName);
 // get the beginning index of the cookie value by looking for the equal sign after the name
 cookieValStart = (document.cookie.indexOf("=", cookieStart) + 1);
 // get the end index of the cookie value by looking for the semi- colon after the value
 cookieValEnd = document.cookie.indexOf(";", cookieStart);
 // if no semi-colon, then use the whole length
 if (cookieValEnd == -1)
 {
 cookieValEnd = document.cookie.length
 }
 // use substring to get the text between the two indices and that is the value of the cookie
 cookieValue = document.cookie.substring(cookieValStart,
 cookieValEnd);
 return cookieValue;
 }
 }
 
function detectCookies()
 {
 /* function returns true if cookies are enables, false if not */
 setCookie("test", "test", "");
 tmp = getCookie("test")
 if (tmp != "test")
 {
 return false;
 }
 else
 {
 return true;
 }
 }
 

