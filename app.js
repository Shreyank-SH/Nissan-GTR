const http = require('http');
const fs = require('fs');


function onrequest(req,res)
{
    if (req.url == '/index.html' || req.url =='/')
    {
        fs.readFile('./index.html', function inner(error,data)
        {
            if(error)
            {
                res.writeHead(404);
                res.write('file not found');
            }
            else
            {
                res.writeHead(200,{"content-type":"text/css"});
                res.writeHead(200,{'content-type':'text/html'});
                res.write(data);
            }
            res.end();
        }
        );
    }
    else if (req.url == '/MKN_assignment1_shreyank_sh.css') 
    {
        res.setHeader('content-type','text/css');
        res.write(fs.readFileSync('./MKN_assignment1_shreyank_sh.css'));
        res.end();
    }
    else
    {
        res.write("Invalid request");
        res.end();
    }
}

http.createServer(onrequest).listen(4000)