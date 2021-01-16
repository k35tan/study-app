export const TestApi = () => {
    return fetch("https://official-joke-api.appspot.com/random_joke",
        {
            method: "GET",
            // credentials: 'include',
        }).then((response) => { return response.json() });
}

// export const ReturnJson = () => {
//     return {
//         "array": [
//             {
//                 "word": "best",
//                 "startTime": 0.0,
//                 "endTime": 11.1
//             },
//             {
//                 "word": "place",
//                 "startTime": 11.1,
//                 "endTime": 11.4
//             },
//             {
//                 "word": "to",
//                 "startTime": 11.4,
//                 "endTime": 11.5
//             },
//             {
//                 "word": "find",
//                 "startTime": 11.8,
//                 "endTime": 11.9
//             },
//         ]
//     }
// }