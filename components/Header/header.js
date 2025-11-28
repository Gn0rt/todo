export const componentStyles = `
#header {
    background-color: var(--bg-header);
    padding: 10px 5px;
    position: fixed; 
    top: 0;
    left: 0;
    right:0;
    z-index: 1000;
}

.content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#logo {
    text-decoration: none;
    display: inline-block;
    color: var(--primary);
    font-size: 30px;
    padding: 5px;
    font-weight: 700;
    letter-spacing: 2px;
}

#search {
    /* border: 1px solid #000; */
    /* padding: 10px; */
    width: 500px;
    display: flex;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
}

#search-value {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    margin-left: 10px;
}

.search-logo {
    text-decoration: none;
    color: var(--white);
    background-color: var(--primary);
    display: block;
    padding: 10px;
    border-radius: 5px;
}

.items {
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
}

.item a {
    text-decoration: none;
    color: var(--white);
    background-color: var(--primary);
    padding: 5px;
    border-radius: 10px;
}

.datetime {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.datetime span {
    color: var(--light-blue);
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
}

`;
