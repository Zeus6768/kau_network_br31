function parse_cookies() {
    var cookies = {};
    if (document.cookie && document.cookie !== '') {
        document.cookie.split(';').forEach(function (c) {
            var m = c.trim().match(/(\w+)=(.*)/);
            if (m !== undefined) {
                cookies[m[1]] = decodeURIComponent(m[2]);
            }
        });
    }
    return cookies;
}

function asyncRequest(method, url, formData, callBackFunc=()=>{}){
    fetch(url, {
        method: method,
		body: formData,
        headers: {
			"X-CSRFToken": parse_cookies().csrftoken
		}
    }).then(response => response.json())
    .then(response => callBackFunc(response))
    .catch(error => console.error('Error: ',error))
}