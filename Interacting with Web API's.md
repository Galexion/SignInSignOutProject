See the [video](https://www.youtube.com/watch?v=0E0IhTppaso) the noting was done with.

# The Knowledge I am coming in with:

 I Already Know:
- How to Call to a Server using `HTTPRequest`
- How to Call A server multiple times (See [[Grabbing Items from a Server Using JSON#Extra Making a Loop]])

What I want to Know:
- How to use other Forms of Request (POST, PUT, DELETE, etc.)
- How to include data with the Request.

## Notes:

> I'm Starting my Note-taking from timestamp `14:36` on-wards, as everything before that covers stuff I already Know.

- Showcased Project is showing off [{JSON} Placeholder](https://jsonplaceholder.typicode.com/), something that echos back any HTTP Request sent.

If you want to use any other method of HTTP Request, you have to use this:
```python
	var data = {
		"id":1,
		"name": "Jhon Doe",
		"userName": "JDoe"
	}
	var headers = ["Content-Type: application/json"]
	$HTTPRequest.request("https://example.com/api", headers, true, HTTPClient.METHOD_POST,query);
```

When asking PerplexityAI>PPLX-7B-Online to Break down the Call:

- `$HTTPRequest.request()`: This method is used to send an HTTP request using the specified URL and headers.
- `"https://example.com/api"`: This is the URL of the API you want to interact with.
- `headers`: This is a dictionary containing the HTTP headers you want to send with the request.
- `true/false`: This parameter indicates that the request should use SSL (Secure Socket Layer). (It originally though it was something for a POST request indicator, though the video says otherwise, and the video has higher priority in the infolist.)
- `HTTPClient.METHOD_POST`: This is the method used for the HTTP request, in this case, the POST method.
- `query`: This is the query string to be sent with the request, which is typically used for sending data to the server.

## Putting this into Practice

I'll be using Godot 3.5.3 for this section, as it's the version I am currently Learning.

Starting of with the UI, I made a Basic Modal with a background, and 2 Fields for Username and Password.

I've also built a API Server using [Bun](https://bun.sh) & [Express](https://expressjs.com/), with a JSON file serving as the Database, as this is a Practice Project.

> Image: Progress in Server is very early, where I can submit a JSON body and have it be echoed back to me.

At around 11/24/2023 03:28PM EST, I finally get checks in place, and have sign in working.
At around 11/24/2023 03:41AM EST, 13 Minutes Later, Sign Up's go online as well.

## What Have I Learned?

Over the course of 3 Hours, I've learned how to use $HTTPRequest to send Request data to a server, and how to design a simple UI to pair with the Server API.

