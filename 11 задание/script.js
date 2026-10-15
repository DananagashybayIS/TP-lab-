* {
    box-sizing: border-box;
    }

body {
margin: 0;
padding: 30px 15px;
font-family: Arial, sans-serif;
background-color: #f0f4f8;
color: #263238;
}

.container {
max-width: 700px;
margin: 30px auto;
padding: 30px;
background-color: white;
border-radius: 15px;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 {
text-align: center;
color: #315b7d;
}

.subtitle {
text-align: center;
color: #777;
margin-bottom: 25px;
}

.faq-item {
margin-bottom: 12px;
border: 1px solid #d9e2ec;
border-radius: 8px;
overflow: hidden;
}

.faq-question {
width: 100%;
padding: 18px;
border: none;
background-color: #e6f0fa;
color: #263238;
text-align: left;
font-size: 16px;
cursor: pointer;
}

.faq-question:hover {
background-color: #d3e5f7;
}

.faq-answer {
display: none;
padding: 15px 18px;
background-color: white;
line-height: 1.6;
}

.faq-item.active .faq-answer {
display: block;
}

.faq-item.active .faq-question {
background-color: #c7e0f7;
}

@media (max-width: 500px) {
.container {
padding: 20px 15px;
}

h1 {
    font-size: 23px;
}

}
