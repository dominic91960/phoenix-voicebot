import requests
from decouple import config

# Convet text to speech using Eleven Labs
def convert_text_to_speech(message):
    # Define constants for the script
    CHUNK_SIZE=1024
    XI_API_KEY=config("ELEVEN_LABS_API_KEY")
    VOICE_ID="21m00Tcm4TlvDq8ikWAM"
    TEXT_TO_SPEAK=message
    OUTPUT_PATH="output.mp3"

    # Construct the URL for the Text-to-Speech API request
    tts_url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}/stream"

    # Set up headers for the API request, including the API key for authentication
    headers = {
        "Accept": "application/json",
        "xi-api-key": XI_API_KEY
    }

    # Set up the data payload for the API request, including the text and voice settings
    data = {
        "text": TEXT_TO_SPEAK,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.8,
            "style": 0.0,
            "use_speaker_boost": True
        }
    }

    # Make the POST request to the TTS API with headers and data, enabling streaming response
    response = requests.post(tts_url, headers=headers, json=data, stream=True)
    
    # Check if the request was successful
    if response.ok:
        return response.content
    else:
        # Print the error message if the request was not successful
        print(response.text)