const Data = {
  
  
    "type": "model",
    "model_id": "1",
    "properties": {
        "id": "1",
        "name": "Renamed Model",
        "description": "Model Description",
        "createdAt": "2022-01-01",
        "updatedAt": "2022-01-01",
        "time_params": {
            "start_date": "2022-01-01",
            "end_date": "2022-12-31",
            "granularity": "Monthly",
            "num_t": 12,
            "last_actual_date": "2022-11-01"
        },
        "time_dimension_labels": [
            "Jan 22",
            "Feb 22",
            "Mar 22",
            "Apr 22",
            "May 22",
            "Jun 22",
            "Jul 22",
            "Aug 22",
            "Sep 22",
            "Oct 22",
            "Nov 22",
            "Dec 22"
        ]
    },
    "sections": [
        {
            "id": 1,
            "name": "Inputs",
            "variable_groups": [
                {
                    "type": "variable",
                    "id": 1
                },
                {
                    "type": "variable",
                    "id": 2
                },
                {
                    "type": "variable",
                    "id": 3
                },
                {
                    "type": "variable",
                    "id": 4
                },
                {
                    "type": "variable",
                    "id": 5
                },
                {
                    "type": "variable",
                    "id": 6
                },
                {
                    "type": "variable",
                    "id": 7
                },
                {
                    "type": "variable",
                    "id": 8
                },
                {
                    "type": "variable",
                    "id": 9
                },
                {
                    "type": "variable",
                    "id": 13
                },
                {
                    "type": "variable",
                    "id": 15
                },
                {
                    "type": "variable",
                    "id": 24
                },
                {
                    "type": "variable",
                    "id": 25
                }
            ]
        },
        {
            "id": 2,
            "name": "New Section",
            "variable_groups": [
                {
                    "type": "variable",
                    "id": 10
                },
                {
                    "type": "variable",
                    "id": 11
                },
                {
                    "type": "variable",
                    "id": 12
                }
            ]
        },
        {
            "id": 3,
            "name": "New Section",
            "variable_groups": [
                {
                    "type": "variable",
                    "id": 14
                }
            ]
        },
        {
            "id": 4,
            "name": "New Section",
            "variable_groups": []
        },
        {
            "id": 5,
            "name": "New Section",
            "variable_groups": []
        },
        {
            "id": 6,
            "name": "New Section",
            "variable_groups": []
        },
        {
            "id": 7,
            "name": "New Section",
            "variable_groups": []
        },
        {
            "id": 11,
            "name": "Section 1",
            "variable_groups": []
        },
        {
            "id": 12,
            "name": "Section 1",
            "variable_groups": []
        }
    ],
    "variables": [
        {
            "id": 1,
            "name": "New Variable",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [
                {
                    "dimension_id": 1,
                    "dimension_name": "New  Dimension"
                }
            ],
            "expressions": {
                "expressions": [
                    {
                        "expression": "1",
                        "expressionRange": {
                            "start_t": 1,
                            "end_t": 12
                        }
                    }
                ]
            },
            "data_values": {
                "values": [
                    {
                        "row_label": "New  Dimension 1",
                        "values": [
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0
                        ]
                    },
                    {
                        "row_label": "New  Dimension 2",
                        "values": [
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0
                        ]
                    }
                ]
            }
        },
        {
            "id": 2,
            "name": "Viktor",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {
                "expressions": [
                    {
                        "expression": "2",
                        "expressionRange": {
                            "start_t": 1,
                            "end_t": 12
                        }
                    }
                ]
            },
            "data_values": {
                "values": [
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0,
                    2.0
                ]
            }
        },
        {
            "id": 3,
            "name": "Oculon",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {
                "expressions": [
                    {
                        "expression": "3",
                        "expressionRange": {
                            "start_t": 1,
                            "end_t": 12
                        }
                    }
                ]
            },
            "data_values": {
                "values": [
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0,
                    3.0
                ]
            }
        },
        {
            "id": 4,
            "name": "New Variable (2)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [
                {
                    "dimension_id": 1,
                    "dimension_name": "New  Dimension"
                }
            ],
            "expressions": {
                "expressions": [
                    {
                        "expression": "{{1}} + {{2}}",
                        "expressionRange": {
                            "start_t": 1,
                            "end_t": 12
                        },
                        "references": {
                            "1": {
                                "variable_id": 1
                            },
                            "2": {
                                "variable_id": 3
                            }
                        }
                    }
                ]
            },
            "data_values": {
                "values": [
                    {
                        "row_label": "New  Dimension 1",
                        "values": [
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0
                        ]
                    },
                    {
                        "row_label": "New  Dimension 2",
                        "values": [
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0,
                            4.0
                        ]
                    }
                ]
            }
        },
        {
            "id": 5,
            "name": "New Variable (3)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 6,
            "name": "New Variable (3)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 7,
            "name": "Renamed Variable",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 8,
            "name": "New Variable (3)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 9,
            "name": "New Variable (3)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 13,
            "name": "New Variable (4)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {
                "expressions": [
                    {
                        "expression": "no expression",
                        "expressionRange": {
                            "start_t": 1,
                            "end_t": 12
                        },
                        "references": {
                            "2": {
                                "variable_id": 2
                            },
                            "3": {
                                "variable_id": 3
                            }
                        }
                    },
                    {
                        "expression": "{{1}} + {{2}}",
                        "expressionRange": {
                            "start_t": 1,
                            "end_t": 2
                        },
                        "references": {
                            "1": {
                                "variable_id": 2,
                                "name": "Viktor"
                            },
                            "2": {
                                "variable_id": 3,
                                "name": "Oculon"
                            }
                        }
                    }
                ]
            },
            "data_values": {
                "values": [
                    5.0,
                    5.0,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 15,
            "name": "New Variable (1)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ]
            }
        },
        {
            "id": 24,
            "name": "New Variable (5)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ]
            }
        },
        {
            "id": 25,
            "name": "New Variable (6)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ]
            }
        },
        {
            "id": 10,
            "name": "New Variable",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 11,
            "name": "New Variable (1)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 12,
            "name": "New Variable (1)",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        {
            "id": 14,
            "name": "New Variable",
            "data_sources": {},
            "variable_type": "number",
            "format": {
                "integer": true,
                "comma_separators": false,
                "zero_as": "-",
                "negatives": "-",
                "precision": {
                    "type": "decimal_places",
                    "value": 2
                },
                "magnitude": "auto",
                "relative_time": true
            },
            "aggregation": {
                "time": "sum",
                "dimension": "sum",
                "data_source": "sum"
            },
            "sorting": "default",
            "dimensions": [],
            "expressions": {},
            "data_values": {
                "values": [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        }
    ],
    "dimensions": [
        {
            "dimension_id": 1,
            "dimension_name": "New  Dimension",
            "dimension_values": [
                {
                    "dimension_value_id": 1,
                    "dimension_value": "New  Dimension 1"
                },
                {
                    "dimension_value_id": 2,
                    "dimension_value": "New  Dimension 2"
                }
            ]
        }
    ],
    "groups": [],
    "datasets": [],
    "loading": {
        "nextCursor": "",
        "hasMore": false
    }

  }
  

export default Data;
