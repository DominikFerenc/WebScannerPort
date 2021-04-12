from flask import Flask, render_template, request, jsonify
import subprocess
from socket import gethostbyname
import platform

windows_template_folder = r"WebLocalScanner\templates"
linux_template_folder = "webscanner/templates"
#app = Flask(__name__, template_folder=windows_template_folder)
app = Flask(__name__, template_folder=linux_template_folder)


class LocalScanner:
    ping = 1
    hostcorrectip = None

    def __init__(self, host, lowestport, maximumport):
        self.host = host
        self.lowestport = lowestport
        self.maximumport = maximumport
        self.set_host_name(self.host)

    def set_host_name(self, host):
        if host is not None:
            self.hostcorrectip = self.get_host_name(host)
            self.check_host_availability(self.hostcorrectip)
            print("new ip: ", self.hostcorrectip)


    def get_host_name(self, host):
        return gethostbyname(host)

    def get_system_name(self):
        return platform.system()

    def check_host_availability(self, host):
        systemname = self.get_system_name()
        if systemname == 'Windows':
            self.ping = subprocess.run(["ping", "-n", "1", host], stdout=subprocess.PIPE).returncode
        else:
            self.ping = subprocess.run(["ping", "-c", "1", host], stdout=subprocess.PIPE).returncode

    def return_ping(self):
        return self.ping



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/host', methods=['POST'])
def host():
    result = None
    lowestport = None
    maximumport = None
    if request.method == 'POST':
        iphost = request.form['ip']
        print('ip: ', iphost)
        localscanner = LocalScanner(iphost, lowestport, maximumport)
        result = localscanner.return_ping()
        print("result in index:", result)
        return jsonify({'ping': result})
    return jsonify({'Error': 'error'})


def main():
    app.run(debug=True)


if __name__ == "__main__":
    main()
