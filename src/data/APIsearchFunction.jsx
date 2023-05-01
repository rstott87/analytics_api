// axios.get("https://www.googleapis.com/youtube/v3/search", {
//        params: {
//          q: searchTerm,
//          part: "snippet",
//          key: "AIzaSyA03W4pd3Ud1hhp - Fb4qjVESiLNPMeIE8Y"
//        }
//      })
//      .then(function (response) {
//        // handle success
//        setSearchResponse(response)
//        console.log(response)
//        console.log(response.data.items[0].snippet.channelTitle);
//        console.log(response.data.items[0].statistics.viewCount);
//        console.log(response.data.items[0].statistics.subscriberCount);
//        props.setViews(response.data.items[0].statistics.viewCount);
//        props.setSubscribers(response.data.items[0].statistics.subscriberCount);
//        props.ssetTitleOfChannel(response.data.items[0].snippet.channelTitle)

//      })
//      .catch(function (error) {
//        // handle error
//        console.log(error);
//      })
//      .finally(function () {
//        // always executed
//       })
