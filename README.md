# 🚀 Smart AI Bot
https://smartbotbynandu.netlify.app/
The **Smart AI Bot** is an interactive web application that allows users to chat with an AI, upload images, generate images from text prompts, and get text-based responses. The application leverages state-of-the-art AI models for content generation and image processing.

## 🌟 Features

- **💬 Chat with AI**: Engage in meaningful conversations with the AI by typing in text prompts. The AI responds with contextually relevant replies.
- **📸 Image Upload**: Upload images, and the AI processes them to generate responses based on image content.
- **🖼️ Image Generation**: Provide text prompts to generate images using AI-based models.
- **💻 Interactive UI**: A user-friendly interface for chatting with the AI, uploading images, and generating content.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: No separate backend. API requests are directly made to AI services.
- **AI Models**:
  - **🧠 Google Gemini** for text-based responses (Generative Language Model).
  - **🤖 Hugging Face** for text-to-image generation.

## 📥 Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment.
- [npm](https://npmjs.com/) - Node.js package manager.
- A modern browser to run the web application.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/smart-ai-bot.git
   cd smart-ai-bot

## ⚙️ How it Works

### 💬 Chat with AI
- Users can type text prompts in the input field to engage in a conversation with the AI.
- The AI processes the input and generates a relevant text-based response.
- **API Used**: Google Gemini's API (Generative Language Model) is used to generate text responses.

### 📸 Upload Image
- Users can upload an image, and the AI processes the image to provide analysis or generate responses based on the image.
- The uploaded image is converted into a base64 format before being sent to the API for processing.

### 🖼️ Generate Image
- Users can provide a text prompt to generate an image based on the description.
- **API Used**: Hugging Face's Text-to-Image model is used to generate images from text descriptions.

### 📂 File Upload
- The application allows users to upload images, which are processed and analyzed by the AI.
- The AI uses both text and image content to generate responses.
