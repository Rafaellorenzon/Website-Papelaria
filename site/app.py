from flask import Flask, render_template

app = Flask(__name__)

# Rota para a página inicial
@app.route('/')
def index():
    return render_template('index.html')

# Rota para a página de brindes
@app.route('/brindes')
def brindes():
    return render_template('brindes.html')

# Rota para a página de canecas
@app.route('/canecas')
def canecas():
    return render_template('canecas.html')

# Rota para a página de personalizados
@app.route('/personalizados')
def personalizados():
    return render_template('personalizados.html')

# Rota para a página de promoção
@app.route('/promocao')
def promocao():
    return render_template('promocao.html')

# Rota para a página de pronta entrega
@app.route('/prontaentrega')
def pronta_entrega():
    return render_template('prontaentrega.html')

@app.route('/produto')
def produto():
    return render_template('produto.html')

@app.route('/painel')
def painel():
    return render_template('painel.html')


if __name__ == '__main__':
    app.run(debug=True)
