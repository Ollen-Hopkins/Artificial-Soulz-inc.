window.addEventListener('load', generateFaces);
        let numberOfFaces = 5;
        const theLeftSide = document.getElementById("leftSide");
        const theRightSide = document.getElementById("rightSide");

        function generateFaces() {
            for (let i = 0; i < numberOfFaces; i++) {
                const face = document.createElement('img');
                face.src = '../img/smile.png';
                const randomTop = Math.floor(Math.random() * 400) + 1;
                const randomLeft = Math.floor(Math.random() * 400) + 1;
                face.style.top = randomTop + 'px';
                face.style.left = randomLeft + 'px';
                theLeftSide.appendChild(face);
                console.log(i);
            }
            const leftSideImages = theLeftSide.cloneNode(true);
            leftSideImages.removeChild(leftSideImages.lastChild)
            theRightSide.appendChild(leftSideImages);
            console.log(leftSide.lastChild);
            theLeftSide.lastChild.addEventListener('click', nextLevel);
            document.body.addEventListener('click', gameOver);
        }

        function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 5;
            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
            }
            while(theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
            }
            generateFaces();
        }

        function gameOver() {
            alert('Game Over!');
            document.body.removeEventListener('click', gameOver);
            theLeftSide.lastChild.removeEventListener('click', nextLevel);
        }
