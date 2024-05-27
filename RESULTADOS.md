<!-- markdownlint-configure-file { "MD024": { "siblings_only": true } } -->
# Resultados Obtidos

## Configuração


## Average Load

### Rust

```json
{
  "state": {
   "isStdOutTTY": true,
   "isStdErrTTY": true,
   "testRunDurationMs": 302018.0125
  },
  "metrics": {
   "vus": {
    "type": "gauge",
    "contains": "default",
    "values": {
     "value": 50,
     "min": 0,
     "max": 50
    }
   },
   "vus_max": {
    "type": "gauge",
    "contains": "default",
    "values": {
     "value": 50,
     "min": 50,
     "max": 50
    }
   },
   "http_req_blocked": {
    "type": "trend",
    "contains": "time",
    "values": {
     "p(95)": 0,
     "avg": 0.001155659944098493,
     "min": 0,
     "med": 0,
     "max": 25.5031,
     "p(90)": 0
    }
   },
   "http_req_connecting": {
    "type": "trend",
    "contains": "time",
    "values": {
     "p(95)": 0,
     "avg": 0.00022249125675484474,
     "min": 0,
     "med": 0,
     "max": 25.5031,
     "p(90)": 0
    }
   },
   "data_received": {
    "values": {
     "count": 784234006,
     "rate": 2596646.469885633
    },
    "type": "counter",
    "contains": "data"
   },
   "http_req_sending": {
    "type": "trend",
    "contains": "time",
    "values": {
     "min": 0,
     "med": 0,
     "max": 21.3332,
     "p(90)": 0,
     "p(95)": 0,
     "avg": 0.006408843885969155
    }
   },
   "iteration_duration": {
    "values": {
     "avg": 3.5682109183508572,
     "min": 0.5006,
     "med": 3.2566,
     "max": 2014.3811,
     "p(90)": 4.8733,
     "p(95)": 5.6194
    },
    "type": "trend",
    "contains": "time"
   },
   "http_req_tls_handshaking": {
    "type": "trend",
    "contains": "time",
    "values": {
     "med": 0,
     "max": 0,
     "p(90)": 0,
     "p(95)": 0,
     "avg": 0,
     "min": 0
    }
   },
   "http_req_receiving": {
    "type": "trend",
    "contains": "time",
    "values": {
     "avg": 0.0315212702037918,
     "min": 0,
     "med": 0,
     "max": 11.7534,
     "p(90)": 0.0699,
     "p(95)": 0.3017
    }
   },
   "iterations": {
    "values": {
     "count": 4198096,
     "rate": 13900.151071287512
    },
    "type": "counter",
    "contains": "default"
   },
   "checks": {
    "type": "rate",
    "contains": "default",
    "values": {
     "rate": 1,
     "passes": 4198099,
     "fails": 0
    }
   },
   "http_reqs": {
    "type": "counter",
    "contains": "default",
    "values": {
     "count": 4198098,
     "rate": 13900.157693409097
    }
   },
   "http_req_failed": {
    "type": "rate",
    "contains": "default",
    "values": {
     "rate": 0,
     "passes": 0,
     "fails": 4198098
    },
    "thresholds": {
     "rate<0.01": {
      "ok": true
     }
    }
   },
   "http_req_duration{expected_response:true}": {
    "type": "trend",
    "contains": "time",
    "values": {
     "avg": 3.5084140101534245,
     "min": 0.4996,
     "med": 3.185,
     "max": 78.2589,
     "p(90)": 4.7773,
     "p(95)": 5.5342
    }
   },
   "data_sent": {
    "type": "counter",
    "contains": "data",
    "values": {
     "count": 671140312,
     "rate": 2222186.373734911
    }
   },
   "http_req_waiting": {
    "type": "trend",
    "contains": "time",
    "values": {
     "p(90)": 4.7229,
     "p(95)": 5.5144,
     "avg": 3.4704838960638438,
     "min": 0.4996,
     "med": 3.1365,
     "max": 77.7581
    }
   },
   "http_req_duration": {
    "type": "trend",
    "contains": "time",
    "values": {
     "p(90)": 4.7773,
     "p(95)": 5.5342,
     "avg": 3.5084140101534245,
     "min": 0.4996,
     "med": 3.185,
     "max": 78.2589
    },
    "thresholds": {
     "p(95)<500": {
      "ok": true
     }
    }
   }
  },
  "root_group": {
   "name": "",
   "path": "",
   "id": "d41d8cd98f00b204e9800998ecf8427e",
   "groups": [
    {
     "name": "setup",
     "path": "::setup",
     "id": "5c0f8025f7e0b6654089e5b00e950f1a",
     "groups": [],
     "checks": [
       {
        "path": "::setup::status is 200",
        "id": "6a0be71c20f269f0733a66d88d45f346",
        "passes": 2,
        "fails": 0,
        "name": "status is 200"
       },
       {
        "path": "::setup::code is 1",
        "id": "500dcda7cfb37baed12a56bb0f3a7f1f",
        "passes": 1,
        "fails": 0,
        "name": "code is 1"
       }
      ]
    }
   ],
   "checks": [
    {
     "name": "status is 200",
     "path": "::status is 200",
     "id": "6210a8cd14cd70477eba5c5e4cb3fb5f",
     "passes": 4198096,
     "fails": 0
    }
   ]
  },
  "options": {
   "noColor": false,
   "summaryTrendStats": [
    "avg",
    "min",
    "med",
    "max",
    "p(90)",
    "p(95)"
   ],
   "summaryTimeUnit": ""
  }
```

### JavaScript

```json
{
  "metrics": {
    "vus": {
      "type": "gauge",
      "contains": "default",
      "values": {
        "value": 50,
        "min": 0,
        "max": 50
      }
    },
    "http_req_failed": {
      "type": "rate",
      "contains": "default",
      "values": {
        "rate": 0,
        "passes": 0,
        "fails": 820615
      },
      "thresholds": {
        "rate<0.01": {
          "ok": true
        }
      }
    },
    "http_req_blocked": {
      "contains": "time",
      "values": {
        "p(90)": 0,
        "p(95)": 0,
        "avg": 0.0024533086770288123,
        "min": 0,
        "med": 0,
        "max": 17.5658
      },
      "type": "trend"
    },
    "http_req_duration{expected_response:true}": {
      "contains": "time",
      "values": {
        "avg": 18.150445124328105,
        "min": 1.9067,
        "med": 17.8256,
        "max": 465.4861,
        "p(90)": 22.1286,
        "p(95)": 23.8531
      },
      "type": "trend"
    },
    "checks": {
      "type": "rate",
      "contains": "default",
      "values": {
        "rate": 1,
        "passes": 820616,
        "fails": 0
      }
    },
    "http_reqs": {
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 820615,
        "rate": 2716.395446656081
      }
    },
    "http_req_duration": {
      "type": "trend",
      "contains": "time",
      "values": {
        "min": 1.9067,
        "med": 17.8256,
        "max": 465.4861,
        "p(90)": 22.1286,
        "p(95)": 23.8531,
        "avg": 18.150445124328105
      },
      "thresholds": {
        "p(95)<500": {
          "ok": true
        }
      }
    },
    "http_req_connecting": {
      "type": "trend",
      "contains": "time",
      "values": {
        "med": 0,
        "max": 17.5658,
        "p(90)": 0,
        "p(95)": 0,
        "avg": 0.0007104098755201892,
        "min": 0
      }
    },
    "http_req_receiving": {
      "type": "trend",
      "contains": "time",
      "values": {
        "avg": 0.08439209080993866,
        "min": 0,
        "med": 0,
        "max": 10.0944,
        "p(90)": 0.381,
        "p(95)": 0.4934
      }
    },
    "data_received": {
      "type": "counter",
      "contains": "data",
      "values": {
        "count": 251951914,
        "rate": 834009.8974133844
      }
    },
    "http_req_sending": {
      "type": "trend",
      "contains": "time",
      "values": {
        "p(95)": 0,
        "avg": 0.011701840448931581,
        "min": 0,
        "med": 0,
        "max": 13.6166,
        "p(90)": 0
      }
    },
    "iterations": {
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 820613,
        "rate": 2716.388826266625
      }
    },
    "iteration_duration": {
      "type": "trend",
      "contains": "time",
      "values": {
        "p(95)": 23.988934999999998,
        "avg": 18.27394282147359,
        "min": 2.1701,
        "med": 17.9363,
        "max": 2054.1789,
        "p(90)": 22.2641
      }
    },
    "data_sent": {
      "values": {
        "count": 130743032,
        "rate": 432784.89523931476
      },
      "type": "counter",
      "contains": "data"
    },
    "vus_max": {
      "type": "gauge",
      "contains": "default",
      "values": {
        "value": 50,
        "min": 50,
        "max": 50
      }
    },
    "http_req_tls_handshaking": {
      "contains": "time",
      "values": {
        "max": 0,
        "p(90)": 0,
        "p(95)": 0,
        "avg": 0,
        "min": 0,
        "med": 0
      },
      "type": "trend"
    },
    "http_req_waiting": {
      "type": "trend",
      "contains": "time",
      "values": {
        "avg": 18.054351193068797,
        "min": 1.9067,
        "med": 17.7305,
        "max": 465.4861,
        "p(90)": 22.0286,
        "p(95)": 23.744
      }
    }
  },
  "root_group": {
    "name": "",
    "path": "",
    "id": "d41d8cd98f00b204e9800998ecf8427e",
    "groups": [
      {
        "checks": [
          {
            "name": "status is 200",
            "path": "::setup::status is 200",
            "id": "6a0be71c20f269f0733a66d88d45f346",
            "passes": 2,
            "fails": 0
          },
          {
            "fails": 0,
            "name": "code is 1",
            "path": "::setup::code is 1",
            "id": "500dcda7cfb37baed12a56bb0f3a7f1f",
            "passes": 1
          }
        ],
        "name": "setup",
        "path": "::setup",
        "id": "5c0f8025f7e0b6654089e5b00e950f1a",
        "groups": []
      }
    ],
    "checks": [
      {
        "name": "status is 200",
        "path": "::status is 200",
        "id": "6210a8cd14cd70477eba5c5e4cb3fb5f",
        "passes": 820613,
        "fails": 0
      }
    ]
  },
  "options": {
    "summaryTrendStats": [
      "avg",
      "min",
      "med",
      "max",
      "p(90)",
      "p(95)"
    ],
    "summaryTimeUnit": "",
    "noColor": false
  },
  "state": {
    "isStdOutTTY": true,
    "isStdErrTTY": true,
    "testRunDurationMs": 302097.0312
  }
}
```

## Breakpoint

### Rust

### JavaScript
