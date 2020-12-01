/**
 * window.addEventListener('DOMContentLoaded', ( ) => {

    let btn = document.querySelector('#myBtn');
    //console.log(btn);
    let modal = document.querySelector('#myModal');
    //console.log(modal);
    let x = document.querySelector('.close');
    //console.log(x);
    
    
    btn.addEventListener('click', ( ) => {
        modal.style.display = 'block';
        
    }) 
    
    btn.addEventListener('mouseover', ( ) => {
        btn.style.cursor = 'pointer';
    })
    
    x.addEventListener('click', ( ) => {
        modal.style.display = 'none';
    
    })
    x.addEventListener('mouseover', ( ) => { 
        x.style.cursor = 'pointer';
    })
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    })
    
    // window.addEventListener('keydown', (event) => {
    //     if (event.code === 'Escape'){
    //         modal.style.display = 'none';
    //     }
    // })
    
        window.addEventListener('keydown', (event) => {
            // if (event.code === 'Escape'){
            //     modal.style.display = 'none';
            // }
            //console.log(event.code);
        //console.log(event.keyCode); //depricated
        // if (event.which === 27){
        //     modal.style.display = 'none';
        // }
         if (event.key === 'Escape'){
            modal.style.display = 'none';
         }
        })
})
 */
// ================================ Css=============================
/**
 * .modal {
	display: none;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0, 0.8);
}

.modal-content {
	background-color: gray;
	margin: 15% auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
}

.close {
	float: right;
	font-size: 28px;
	font-weight: bold;
}
 */

//======================= html ===============================
/**
 * < !DOCTYPE html >
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles-modal.css">
    <title>Document</title>
    
	<script src="./js/modal.js"></script>
</head>
<body>
	
	<button id="myBtn">Open modal</button>
	<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<p>Modal window content</p>
		</div>
	</div>
	
    
</body>
</html>
 */
