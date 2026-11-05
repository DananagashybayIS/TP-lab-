body {
    font-family: Arial, sans-serif;
    background: #f4f6fb;
    color: #252943;
    margin: 0;
    padding: 20px;
}
.container {
    max-width: 850px;
    margin: 30px auto;
    padding: 25px;
    background: white;
    border-radius: 12px;
}
h1 {
    color: #16794b;
}
button {
    padding: 11px 16px;
    border: none;
    border-radius: 6px;
    background: #198754;
    color: white;
    cursor: pointer;
}
button:hover {
    background: #146c43;
}
.search-box {
    display: flex;
    gap: 10px;
    margin: 20px 0;
}
input {
    flex: 1;
    min-width: 0;
    padding: 11px;
    border: 1px solid #ccc;
    border-radius: 6px;
}
.card {
    padding: 14px;
    margin: 10px 0;
    background: #effaf4;
    border-left: 4px solid #198754;
    border-radius: 6px;
    overflow-wrap: anywhere;
}
.card h3 {
    margin-top: 0;
    text-transform: capitalize;
}
#status {
    color: #555;
}
@media (max-width: 500px) {
    .search-box {
        flex-direction: column;
    }
}
