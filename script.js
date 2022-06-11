const addTweetBtn = document.getElementById('add-tweet');
const tweetContentInput = document.getElementById('tweet-content');
const tweetsContainer = document.getElementById('tweets-container');
let itemsArr = [];

addTweetBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const tweetContentValue = tweetContentInput.value;
    var reTweetContentValue = tweetContentInput.value;
    
    itemsArr.push({ author: 'Khaled Hassan', content: tweetContentValue })
    const feedTweet = document.createElement('div');
    console.log(itemsArr)
    
    const personalImg = document.createElement('img');
    const feedTweetDetails = document.createElement('div');
    const tweeterDetails = document.createElement('div');
    const tweeterName = document.createElement('a');
    const moreIcon = document.createElement('i');
    const tweeterHandle = document.createElement('span');
    const tweetContent = document.createElement('div');
    const tweetIcons = document.createElement('div');
    const restartIcon = document.createElement('i');
    const favoriteIcon = document.createElement('i');
    const uploadIcon = document.createElement('i');
    feedTweet.className = 'feed-tweet';
    personalImg.className = 'personal-img';
    feedTweetDetails.className = 'feed-tweet-details';
    tweeterDetails.className = 'tweeter-details';
    tweeterName.className = 'tweeter-name';
    tweeterHandle.className = 'tweeter-handle';
    moreIcon.className = 'material-icons-outlined';
    tweetContent.className = 'tweet-content';
    tweetIcons.className = 'tweet-icons';
    restartIcon.className = 'material-icons-outlined';
    favoriteIcon.className = 'material-icons-outlined';
    favoriteIcon.addEventListener('click', () => {
        if(favoriteIcon.textContent == "favorite_border"){
            favoriteIcon.textContent = 'favorite'
        }else{
            favoriteIcon.textContent = 'favorite_border'
        }
    })
    
    tweeterName.textContent = 'Khaled Hassan'
    tweeterHandle.textContent = '@KhaledH'
    personalImg.src = 'images/profile-pic.png'
    moreIcon.textContent = 'more_horiz'
    restartIcon.textContent = 'restart_alt'
    favoriteIcon.textContent = 'favorite_border'
    
    feedTweet.append(personalImg, feedTweetDetails)
    feedTweetDetails.append(tweeterDetails, tweetContent, tweetIcons)
    tweeterDetails.append(tweeterName, moreIcon)
    tweeterName.appendChild(tweeterHandle)
    tweetIcons.append(restartIcon, favoriteIcon)
    tweetContent.textContent = tweetContentValue;
    
    tweetContentInput.value = '';
    tweetsContainer.appendChild(feedTweet)
    
    
    
    restartIcon.addEventListener('click', () => {
        const tweetContentValue = tweetContentInput.value;
        
        itemsArr.push({ author: 'Khaled Hassan', content: reTweetContentValue })
        const feedTweet = document.createElement('div');
        console.log(itemsArr)
        
        const personalImg = document.createElement('img');
        const feedTweetDetails = document.createElement('div');
        const tweeterDetails = document.createElement('div');
        const tweeterName = document.createElement('a');
        const moreIcon = document.createElement('i');
        const tweeterHandle = document.createElement('span');
        const reTweetContent = document.createElement('div');
        const tweetIcons = document.createElement('div');
        const restartIcon = document.createElement('i');
        const favoriteIcon = document.createElement('i');
        feedTweet.className = 'feed-tweet';
        personalImg.className = 'personal-img';
        feedTweetDetails.className = 'feed-tweet-details';
        tweeterDetails.className = 'tweeter-details';
        tweeterName.className = 'tweeter-name';
        tweeterHandle.className = 'tweeter-handle';
        moreIcon.className = 'material-icons-outlined';
        reTweetContent.className = 'tweet-content';
        tweetIcons.className = 'tweet-icons';
        restartIcon.className = 'material-icons-outlined';
        favoriteIcon.className = 'material-icons-outlined';
        favoriteIcon.addEventListener('click', () => {
            if(favoriteIcon.textContent == "favorite_border"){
                favoriteIcon.textContent = 'favorite'
            }else{
                favoriteIcon.textContent = 'favorite_border'
            }
        })
        
        tweeterName.textContent = 'Khaled Hassan'
        tweeterHandle.textContent = '@KhaledH'
        personalImg.src = 'images/profile-pic.png'
        moreIcon.textContent = 'more_horiz'
        restartIcon.textContent = 'restart_alt'
        favoriteIcon.textContent = 'favorite_border'
        
        feedTweet.append(personalImg, feedTweetDetails)
        feedTweetDetails.append(tweeterDetails, reTweetContent, tweetIcons)
        tweeterDetails.append(tweeterName, moreIcon)
        tweeterName.appendChild(tweeterHandle)
        tweetIcons.append(restartIcon, favoriteIcon)
        reTweetContent.textContent = reTweetContentValue;
        
        tweetsContainer.appendChild(feedTweet)
        
        
    })
    
})





