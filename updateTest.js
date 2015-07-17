function readHtml(url) {
        try{
		var read=new java.io.ByteArrayOutputStream();
		var response=android.net.http.AndroidHttpClient.newInstance("ReadHtml()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(read);
		read.close();
		return String(read.toString());
	}catch(e){
		print(e);
	}
}

//new.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(file,state) 
function download(url, dir, fileName)
{
ctx.runOnUiThread(new java.lang.Runnable({run: function()
{
var u=java.net.URL(url);//다운로드할페이지(단페이지는속성이어야한다)
var urlConnect=null;
var bis=null;
try
{
clientMessage("installing....."); 
android.os.StrictMode.setThreadPolicy(new android.os.StrictMode.ThreadPolicy.Builder().permitNetwork().build());   
urlConnect=u.openConnection();
bis=new java.io.BufferedInputStream(urlConnect.getInputStream());
var files=new java.io.File(dir+filename); //파일위치
var directory=java.io.File(dir);//파일생성
if(directory.exists()==false)
{
directory.mkdirs();
}
var bos=new java.io.BufferedOutputStream(new java.io.FileOutputStream(files));
while(true)
{
var reader=bis.read();
if(reader<0) 
{ 
break;
}
bos.write(reader);
}
clientMessage("install Done!");
bis.close();
bos.close();
urlConnect.disconnect();   
return files.exists();
}
catch(e)
{ 
p(e);//에러
}
}
}));
}
//마지막 0은 1로 바꾸기


var getVersion = readHtml("https://raw.githubusercontent.com/krim4918/updateCheck/master/README.md");
var Version = 1.2;
function newLevel(){
	if (Version < getVersion){
		download(https://raw.githubusercontent.com/krim4918/updateCheck/master/updateTest.js , sdcard+"/rpg", "/autoUpdate");
	}
}

