window.addEventListener("load", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", SendEmail());
});

function SendEmail() 
{
    const name = document.querySelector("#InputName").value;
    const email = document.querySelector("#InputEmail").value;
    const subject = document.querySelector("#InputSubject").value;
    const message = document.querySelector("#InputMessage").value;

    let ebody = "Név:" + name + "<br/> Email:" + email + "<br/> Tárgy:" + subject + "<br/> Üzenet:" + message;


    //window.alert(ebody);
    

    //Email.send({
    //  Host: "smtp.mailendo.com",
    //  Username: "username",
    //  Password: "password",
    //  To: 'info@neurofit.hu',
    //  From: "info@neurofit.hu",
    //  Subject: "Üzenet a neurofit.hu-ról",
    //  Body: ebody
    //}).then(
    //  message => alert(message)
    //);
}