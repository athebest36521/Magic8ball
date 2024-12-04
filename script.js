let userName = prompt("Hi, who are you?"); // User can enter their name here

userName ? document.getElementById('greeting').innerText = `Hello, ${userName}!` :

    document.getElementById('greeting').innerText = 'Hello!';

function shakeMagic8Ball() {
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    let responseImg

    let userQuestion = prompt('What is your question for the Mighty 8 Ball?');



    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            responseImg = 'imgs/download(9).jpeg'
            break;
        case 1:
            eightBall = 'It is decidedly so';
            responseImg = 'imgs/download(10).jpeg'
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            responseImg = 'imgs/download.jpg'
            break;
        case 3:
            eightBall = 'Cannot predict now';
            responseImg = 'imgs/download(11).jpeg'
            break;
        case 4:
            eightBall = 'Do not count on it';
            responseImg = 'imgs/images(3).jpeg'
            break;
        case 5:
            eightBall = 'My sources say no';
            responseImg = 'imgs/download(12).jpeg'
            break;
        case 6:
            eightBall = 'Outlook not so good';
            responseImg = 'imgs/download(13).jpeg'
            break;
        case 7:
            eightBall = 'Signs point to yes';
            responseImg = 'imgs/download(14).jpeg'
            break;
    }

    console.log(`The Magic Eight Ball says: ${eightBall}`);

    document.getElementById('response-text').innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. The wise and wonderous 8 ball has replied ${eightBall}`
    document.getElementById('response-image').src = responseImg
}

