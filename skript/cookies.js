function getCookieValue(cookieName){
const cookies = dokument.cookie.split(';');
for (let i = 0 ; i < cookies.length; i++);
const cookie = cookies[i].trim();
if(cookies.startsWith(cookieName + '=')) {
return cookie.substring(cookieName.length + 1 )

  }
}
return '';

saveCartToCookies(){
    let cartJSON = JSON.stringify(this.items);
    document.cookie = cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;` ;
}