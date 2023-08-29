#!/usr/bin/python

import sys
import time
class Employee():
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name


 
def main_loop():
    while 1:
        emp1 = Employee('Bat Mon')
        print(emp1.name)
        time.sleep(0.1)

if __name__ == 'api_main':
    try:
        main_loop()
    except KeyboardInterrupt:
        print >> sys.stderr, '\nExiting by user request.\n'
        sys.exit(0)