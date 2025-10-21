from flask import Flask, jsonify, send_from_directory
from datetime import datetime
import os

app = Flask(__name__)

@app.route("/")
def home():
    return send_from_directory(".", "notification.html")

@app.route("/get_notifications")
def get_notifications():
    notifications = [
        {
            "title": "💰 Reminder",
            "message": "Your electricity bill is due tomorrow. Don’t forget to pay on time!",
            "date": datetime.now().strftime("%d %b %Y")
        },
        {
            "title": "🏦 Alert",
            "message": "Your monthly transaction limit is about to reach 90%. Review your spending habits.",
            "date": datetime.now().strftime("%d %b %Y")
        },
        {
            "title": "📊 Tip",
            "message": "Start saving at least 10% of your income for financial security.",
            "date": datetime.now().strftime("%d %b %Y")
        }
    ]
    return jsonify({"notifications": notifications})

if __name__ == "__main__":
    app.run(debug=True)
