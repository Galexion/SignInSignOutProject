extends Control


# Declare member variables here. Examples:
# var a = 2
# var b = "text"
var userData = {
	"username": null,
	"password": null
}
var server = "http://localhost:8022/"

# Called when the node enters the scene tree for the first time.
func _ready():
	$errorText.text = "" # Clear errorText
	#pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_SignIn_button_release():
	if (checkForm() == true):
		$errorText.text = "Contacting Server..."
		
		var query = JSON.print(userData)
		var headers = ["Content-Type: application/json"]
		$HTTPRequest.request(server + "signin", headers, false, HTTPClient.METHOD_POST,query);
	else:
		$errorText.text = "Error: No Username or Password Detected."
	pass # Replace with function body.

func _on_SignUp_button_release():
	if (checkForm() == true):
		$errorText.text = "Contacting Server..."
		
		var query = JSON.print(userData)
		var headers = ["Content-Type: application/json"]
		$HTTPRequest.request(server + "signup", headers, false, HTTPClient.METHOD_POST,query);
	else:
		$errorText.text = "Error: No Username or Password Detected."
	pass # Replace with function body.

func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	print(response_code)
	var json = JSON.parse(body.get_string_from_utf8()).result
	if (response_code != 200):
		$errorText.text = json.error
	else:
		if(json.method == "signin"):
			$errorText.text = "Welcome Back, " + json.user.username + "\nLevel:" + str(json.user.level)
		if(json.method == "signup"):
			$errorText.text = "Welcome to GXNetworks, " + json.user.username + "."
	pass # Replace with function body.

# On Field Input for Username & Text, update respective variable.

func _on_Username_text_changed(new_text):
	userData.username = new_text
	pass # Replace with function body.

func _on_Password_text_changed(new_text):
	userData.password = new_text
	pass # Replace with function body.

# check the Form for data
func checkForm():
	# If the username and password are null (no input) or are empty (""), return false.
	if(userData.username == null or userData.password == null or userData.username == "" or userData.password == ""):
		return false
	else:
		return true
