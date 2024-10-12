PayPayAPI = "https://www.paypay.ne.jp/app/v2/p2p-api/getP2PLinkInfo?verificationCode=xmg1OSSaguOlzPMj&client_uuid=2645d591-6ff7-4d7c-9452-ae9baa34995f";
headers = 
    {
        method: 'GET', // ここでHTTPメソッドを指定 (GET, POST, PUT, etc.)
        headers: {
        'User-Agent': 'Mozilla/5.0 Chrome/109.0.0.0 Safari/537.36',
        'Content-Type': 'application/json' // Content-Typeはリクエストの形式を指定
        }
    };

function GenerateLinks(){
    fetch(PayPayAPI, {
        method: "GET", // *GET, POST, PUT, DELETE, etc. 
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
      
      })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // JSONデータとしてレスポンスを解析
        })
        .then(data => {
            console.log(data); // データを処理
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

