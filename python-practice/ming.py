from google import genai

client = genai.Client(
    #api_key="api-key",
    vertexai=False,
    enterprise=False
)

chat = client.chats.create(model="gemini-2.0-flash")

print("GeoffreyGPT is ready! Type 'exit' to quit.\n")

while True:
    user = input("you: ")
    if user.lower() == "exit":
        break
    reply = chat.send_message(user)
    print("GeoffreyGPT:", reply.text)