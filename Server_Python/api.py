from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    response = {
        "Instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Pablo José Oliva Bonilla - 201700898",
    }
    return jsonify(response), 200


@app.route('/check', methods=['GET'])
def check():
    response = {
        "message": "OK"
    }
    return jsonify(response), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)
