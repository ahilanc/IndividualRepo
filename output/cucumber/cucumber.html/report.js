$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1560.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1561.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1562.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1563.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1564.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1565.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields rowQuery2 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1566.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1567.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:82"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1568.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:89"
});
formatter.embedding("image/png", "images/953be662b31440ef988f855eeeccd1569.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b160.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b161.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b162.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b163.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b164.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b165.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields rowQuery3 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b166.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b167.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:82"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b168.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:89"
});
formatter.embedding("image/png", "images/0cd8b66caeaf42628ade851d7b9c0b169.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f20.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f21.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f22.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f23.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f24.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f25.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields rowQuery4 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f26.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f27.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:82"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f28.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:89"
});
formatter.embedding("image/png", "images/be2a98c0ae894d3e83e8ad3be5cb37f29.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields rowQuery5 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:82"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:89"
});
formatter.embedding("image/png", "images/799fe7091a0942e0b0eea042a08463aa9.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf30.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf31.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf32.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf33.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf34.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf35.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields rowQuery1 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf36.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf37.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:82"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf38.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:89"
});
formatter.embedding("image/png", "images/8d9b4e3867584ce7a880457e9971ccf39.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
