
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio >= 0.5) { 
                    const contentElement = entry.target.querySelector('.content-section__text');
                    const content = 'If you want people to have fun—give them the day off. If you want them to learn... engage them with the content.'
                    const words = content.split(' ');
                    words.forEach((word,ind) => {
                        const wordSpan = document.createElement('span');
                        wordSpan.classList.add('word');
                        wordSpan.style.display = 'inline-block';

                        word.split('').forEach((letter,index) => {
                            if((index+ind)%5===4){
                                const letterSpan = document.createElement('span');
                                letterSpan.textContent = letter;
                                letterSpan.classList.add('letter-fade1');
                                letterSpan.style.opacity = 0
                                wordSpan.appendChild(letterSpan);
                            }else if(index%5===4){
                                const letterSpan = document.createElement('span');
                                letterSpan.textContent = letter;
                                letterSpan.classList.add('letter-fade2');
                                letterSpan.style.opacity = 0
                                wordSpan.appendChild(letterSpan);
                            }else if((index+ind)%5===0){
                                const letterSpan = document.createElement('span');
                                letterSpan.textContent = letter;
                                letterSpan.classList.add('letter-fade2');
                                letterSpan.style.opacity = 0
                                wordSpan.appendChild(letterSpan);
                            }else if((index+ind)%5===1){
                                const letterSpan = document.createElement('span');
                                letterSpan.textContent = letter;
                                letterSpan.classList.add('letter-fade3');
                                letterSpan.style.opacity = 0
                                wordSpan.appendChild(letterSpan);
                            }else{
                                const letterSpan = document.createElement('span');
                                letterSpan.textContent = letter;
                                letterSpan.classList.add('letter');
                                wordSpan.appendChild(letterSpan);
                            }
                        });

                        contentElement.appendChild(wordSpan);
                        const space = document.createTextNode(' '); 
                        contentElement.appendChild(space);
                    });

                    observer.unobserve(entry.target);
                }
            }
        });
    },
    {
        threshold: 0.6, 
    }
);
document.querySelectorAll('.content-section').forEach((el) => observer.observe(el));