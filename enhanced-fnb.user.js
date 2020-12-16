@-moz-document domain("fnb.co.za") {
    /* Hide elements */
    
    body > div.section.height2.headerTabs.backTurq, body > div.section.height2.headerTabs.backTurq > div, div.loginFields ~ div.wrapperFloatRight, .slide, .sectionFixedFooterButton, .sideNote.legal, .CovidWrapper, .searchButton {
        display: none;
    }
    
    /* Global */
    
    .backTurq, .overlay .section .section.backTurq {
        background: #00999b;
    }
    
    /* Header */
    
    .header {
        position: relative;
        top: 0;
        height: 100% !important;
    }
    
    .homepageLink img {
        max-height: 84px;
    }
    
    /* Home */
    
    .homepageLink img {
        margin: 20px auto;
    }
    
    .sectionColFull {
        display: flex;
        justify-content: center;
    }
    
    .sectionColFull .sectionColInner {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .wrapperHeight100 {
        height: auto;
        display: flex;
        justify-content: center;
        
    }
    
    .vAlignMiddle {
        top: 0;
        transform: none;
    }
    
    /* Login */
    
    .loginFields {
        display: flex;
        flex-direction: column;
        float: none;
        top: 0;
        transform: none;
    }
    
    .loginFields .textinput {
        width: 100%;
    }
    
    input[type=text], input[type=password], input[type=submit], input[type=button] {
        height: auto;
        padding: 15px 20px;
        width: 100%;
        margin: 4px 0;
        background: #fff;
        font-size: 18px;
    }
    
    input[type=submit], input[type=button] {
        
        border-color: #fa9d1e;
        background-color: #fa9d1e;
        padding: 10px;
    }
    
    input[type=submit]:hover, input[type=button]:hover {
        background: #d88515;
        color: #fff;
    }
    
    .loginFields .inputButtonHolder {
        float: none;
        height: auto;
    }
    }