import json
import random

# Get recent messages
def get_recent_messages():
    # Define the file name and learn instruction
    file_name="stored_data.json"
    learn_instruction={
        "role":"system",
        "content":"Your name is Phoenix AI. You will act as a voice assistant to the users of a website known as Phoenix. Phoenix is a website built for the managment and monitoring of livestock with the help of drones. Keep your answers to under 30 words."
    }
    # Add a random element
    x=random.uniform(0,1)
    if x < 0.5:
        learn_instruction["content"] += " Your response will include some dry humor."
    else:
        learn_instruction["content"] += " Your response will include some sarcasm."
    # Initialize messages
    messages=[]
    # Append instruction to message
    messages.append(learn_instruction)
    # Get last messages
    try:
        with open(file_name) as user_file:
            data = json.load(user_file)
            # Append last 5 rows of data
            if data:
                if len(data)<5:
                    for item in data:
                        messages.append(item)
                else:
                    for item in data[-5:]:
                        messages.append(item)
    except Exception as e:
        print(e)
        pass
    # Return
    return messages

# Store messages
def store_messages(request_message, response_message):
    # Define the file name
    file_name="stored_data.json"
    # Get recent messages
    messages = get_recent_messages()[1:]
    # Add messages to data
    user_message={
        "role":"user",
        "content":request_message
    }
    assistant_message={
        "role":"assistant",
        "content":response_message
    }
    messages.append(user_message)
    messages.append(assistant_message)
    # Save the updated file
    with open(file_name, "w") as f:
        json.dump(messages, f)

# Reset messages
def reset_messages():
    # Overwrite current file with nothing
    open("stored_data.json", "w")