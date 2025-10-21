from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Finance literacy data
finance_data = {
    "saving": "Saving means setting aside a portion of your income for future use instead of spending it immediately.",
    "investment": "Investment means using your money to buy assets like stocks, bonds, or mutual funds to earn returns over time.",
    "budget": "A budget is a financial plan that tracks your income and expenses to help you manage money wisely.",
    "loan": "A loan is borrowed money that must be repaid with interest within a certain period.",
    "interest": "Interest is the extra money paid for borrowing money or the profit earned on savings or investments.",
    "credit": "Credit is the ability to borrow money or access goods and services with the promise to pay later.",
    "debt": "Debt is the total amount of money that you owe to lenders or creditors.",
    "income": "Income is the money you earn from work, business, or investments.",
    "expense": "Expenses are the costs or money spent on goods and services.",
    "financial literacy": "Financial literacy means understanding how money works — including budgeting, saving, investing, and managing debt.",
    "credit score": "A credit score is a number that shows how likely you are to repay borrowed money on time. It helps banks decide your loan eligibility.",
    "inflation": "Inflation is the increase in the general prices of goods and services over time, reducing the purchasing power of money.",
    "tax": "Tax is the money that individuals and businesses must pay to the government for public services and infrastructure.",
    "insurance": "Insurance is a financial product that protects you against financial loss by paying premiums regularly."
}

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message', '').lower()

    response = "I'm sorry, I don't have information about that yet. Try asking about saving, investment, loans, or credit score."

    # Keyword-based matching
    for keyword, answer in finance_data.items():
        if keyword in message:
            response = answer
            break

    return jsonify({"reply": response})

if __name__ == '__main__':
    app.run(debug=True)
