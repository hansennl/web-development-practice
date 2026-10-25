from google import genai

client = genai.Client(
    api_key="AQ.Ab8RN6Iru5AVx5K6H9v5-wLgSPH6XTEbAQoJz_yUZP6BZ1K0Qw",
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