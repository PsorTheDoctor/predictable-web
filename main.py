from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')


@app.route('/admin')
def admin():
    return render_template('admin.html')


@app.route('/exit')
def unsubscribe():
    return render_template('exit.html')


if __name__ == '__main__':
    app.run(port=5001, use_reloader=True, debug=True)
