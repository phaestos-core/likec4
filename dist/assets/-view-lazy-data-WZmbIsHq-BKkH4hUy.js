function t(e){switch(e){case"aws_cognito":return`direction: down\r
\r
CloudUi: {\r
  label: "Frontend"\r
}\r
CloudBackend: {\r
  label: "Backend"\r
}\r
Aws: {\r
  label: "Amazon Web Services"\r
\r
  Cognito: {\r
    label: "Cognito"\r
  }\r
}\r
\r
CloudUi -> Aws.Cognito: "authenticates"\r
CloudBackend -> Aws.Cognito: "authorizes"\r
`;case"aws":return`direction: down\r
\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Ui: {\r
    label: "Frontend"\r
  }\r
  Backend: {\r
    label: "Backend"\r
  }\r
}\r
Aws: {\r
  label: "Amazon Web Services"\r
\r
  Cognito: {\r
    label: "Cognito"\r
  }\r
  Pg: {\r
    label: "PostgreSQL"\r
    shape: stored_data\r
  }\r
}\r
\r
Cloud.Ui -> Aws.Cognito: "authenticates"\r
Cloud.Backend -> Aws.Pg: "reads/writes"\r
Cloud.Backend -> Aws.Cognito: "authorizes"\r
`;case"cloud":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Ui: {\r
    label: "Frontend"\r
  }\r
  Backend: {\r
    label: "Backend"\r
  }\r
}\r
Aws: {\r
  label: "Amazon Web Services"\r
}\r
\r
Customer -> Cloud.Ui: "uses web and mobile"\r
Cloud.Ui -> Cloud.Backend: "fetches data"\r
Cloud.Ui -> Aws: "authenticates"\r
Cloud.Backend -> Aws: "[...]"\r
`;case"index":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Cloud: {\r
  label: "Cloud System"\r
}\r
Aws: {\r
  label: "Amazon Web Services"\r
}\r
\r
Customer -> Cloud: "uses and pays"\r
Cloud -> Aws: "uses services"\r
`;case"cloud_backend":return`direction: down\r
\r
CloudUi: {\r
  label: "Frontend"\r
}\r
CloudBackend: {\r
  label: "Backend"\r
\r
  Graphql: {\r
    label: "GraphQL API"\r
  }\r
}\r
Aws: {\r
  label: "Amazon Web Services"\r
\r
  Pg: {\r
    label: "PostgreSQL"\r
    shape: stored_data\r
\r
    Tbl_sessions: {\r
      label: "[ sessions ]"\r
      shape: stored_data\r
    }\r
    Tbl_customers: {\r
      label: "[ customers ]"\r
      shape: stored_data\r
    }\r
  }\r
  Cognito: {\r
    label: "Cognito"\r
  }\r
}\r
\r
CloudUi -> CloudBackend.Graphql: "fetches data"\r
CloudUi -> Aws.Cognito: "authenticates"\r
CloudBackend.Graphql -> Aws.Pg.Tbl_sessions: "reads/writes"\r
CloudBackend.Graphql -> Aws.Pg.Tbl_customers: "reads/writes"\r
CloudBackend.Graphql -> Aws.Cognito: "authorizes"\r
Aws.Pg.Tbl_sessions -> Aws.Pg.Tbl_customers: "references to"\r
`;case"aws_pg":return`direction: down\r
\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Backend: {\r
    label: "Backend"\r
  }\r
}\r
AwsPg: {\r
  label: "AWS - PostgreSQL"\r
  shape: stored_data\r
\r
  Tbl_sessions: {\r
    label: "[ sessions ]"\r
    shape: stored_data\r
  }\r
  Tbl_customers: {\r
    label: "[ customers ]"\r
    shape: stored_data\r
  }\r
}\r
\r
Cloud.Backend -> AwsPg.Tbl_sessions: "reads/writes"\r
Cloud.Backend -> AwsPg.Tbl_customers: "reads/writes"\r
AwsPg.Tbl_sessions -> AwsPg.Tbl_customers: "references to"\r
`;case"cloud_ui":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
CloudUi: {\r
  label: "Frontend"\r
\r
  Dashboard: {\r
    label: "Customer Dashboard"\r
  }\r
  Mobile: {\r
    label: "Mobile App"\r
  }\r
}\r
CloudBackend: {\r
  label: "Backend"\r
}\r
Aws: {\r
  label: "Amazon Web Services"\r
\r
  Pg: {\r
    label: "PostgreSQL"\r
    shape: stored_data\r
  }\r
  Cognito: {\r
    label: "Cognito"\r
  }\r
}\r
\r
Customer -> CloudUi.Mobile: "opens on mobile device"\r
Customer -> CloudUi.Dashboard: "opens in browser"\r
CloudUi.Dashboard -> CloudBackend: "fetches data"\r
CloudUi.Dashboard -> Aws.Cognito: "authenticates"\r
CloudUi.Mobile -> CloudBackend: "fetches data"\r
CloudUi.Mobile -> Aws.Cognito: "authenticates"\r
CloudBackend -> Aws.Pg: "reads/writes"\r
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"aws_cognito":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_aws {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AMAZON WEB SERVICES</B></FONT>>,
            likec4_depth=1,
            likec4_id=aws,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        cognito [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Cognito</FONT></TD><TD ROWSPAN="2" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides user management and<BR/>authentication</FONT></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1,
            margin="0.139,0.362"];
    }
    ui [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">All the frontend applications of the cloud<BR/>system</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui",
        likec4_level=0,
        margin="0.417,0.445"];
    ui -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws.cognito",
        minlen=1,
        style=dashed,
        weight=2];
    backend [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend",
        likec4_level=0,
        margin="0.362,0.362"];
    backend -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authorizes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.cognito",
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"aws":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">All the frontend applications of the cloud<BR/>system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui",
            likec4_level=1,
            margin="0.417,0.445"];
        backend [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.362,0.362"];
    }
    subgraph cluster_aws {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AMAZON WEB SERVICES</B></FONT>>,
            likec4_depth=1,
            likec4_id=aws,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        cognito [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Cognito</FONT></TD><TD ROWSPAN="2" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides user management and<BR/>authentication</FONT></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1,
            margin="0.139,0.362"];
        pg [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">PostgreSQL</FONT></TD><TD ROWSPAN="3" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">AWS Aurora PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Database for storing relational<BR/>data</FONT></TD></TR></TABLE>>,
            likec4_id="aws.pg",
            likec4_level=1,
            margin="0.139,0",
            penwidth=2,
            shape=cylinder];
    }
    ui -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws.cognito",
        minlen=1,
        style=dashed,
        weight=2];
    backend -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authorizes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.cognito",
        style=dashed,
        weight=3];
    backend -> pg [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg",
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"cloud":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">All the frontend applications of the cloud<BR/>system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui",
            likec4_level=1,
            margin="0.417,0.445"];
        backend [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.362,0.362"];
        ui -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui:cloud.backend",
            minlen=0,
            style=dashed,
            weight=4];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> ui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses web and mobile</FONT></TD></TR></TABLE>>,
        likec4_id="customer:cloud.ui",
        minlen=1,
        style=dashed,
        weight=3];
    aws [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Amazon Web Services</FONT></TD><TD ROWSPAN="2" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Cloud Infrastructure and<BR/>Managed Services</FONT></TD></TR></TABLE>>,
        likec4_id=aws,
        likec4_level=0,
        margin="0.139,0.362"];
    ui -> aws [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws",
        style=dashed,
        weight=4];
    backend -> aws [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws",
        style=dashed,
        weight=3];
}
`;case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    cloud [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Cloud System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Our SaaS platfrom that allows<BR/>customers to interact with<BR/>the latest technologies</FONT></TD></TR></TABLE>>,
        likec4_id=cloud,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> cloud [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses and pays</FONT></TD></TR></TABLE>>,
        likec4_id="customer:cloud",
        minlen=1,
        style=dashed,
        weight=2];
    aws [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Amazon Web Services</FONT></TD><TD ROWSPAN="2" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Cloud Infrastructure and<BR/>Managed Services</FONT></TD></TR></TABLE>>,
        likec4_id=aws,
        likec4_level=0,
        margin="0.139,0.362"];
    cloud -> aws [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses services</FONT></TD></TR></TABLE>>,
        likec4_id="cloud:aws",
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"cloud_backend":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_backend {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BACKEND</B></FONT>>,
            likec4_depth=1,
            likec4_id="cloud.backend",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        graphql [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">GraphQL API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The GraphQL API of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend.graphql",
            likec4_level=1,
            margin="0.362,0.362"];
    }
    subgraph cluster_aws {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AMAZON WEB SERVICES</B></FONT>>,
            likec4_depth=2,
            likec4_id=aws,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_pg {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>POSTGRESQL</B></FONT>>,
                likec4_depth=1,
                likec4_id="aws.pg",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            tbl_sessions [color="#2563eb",
                fillcolor="#3b82f6",
                fontcolor="#eff6ff",
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">[ sessions ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Active sessions of<BR/>authenticated customers</FONT></TD></TR></TABLE>>,
                likec4_id="aws.pg.tbl_sessions",
                likec4_level=2,
                margin="0.362,0",
                penwidth=2,
                shape=cylinder];
            tbl_customers [color="#2563eb",
                fillcolor="#3b82f6",
                fontcolor="#eff6ff",
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">[ customers ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR></TABLE>>,
                likec4_id="aws.pg.tbl_customers",
                likec4_level=2,
                margin="0.362,0",
                penwidth=2,
                shape=cylinder];
            tbl_sessions -> tbl_customers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">references to</FONT></TD></TR></TABLE>>,
                likec4_id="aws.pg.tbl_sessions:aws.pg.tbl_customers",
                minlen=0,
                style=solid,
                weight=3];
        }
        cognito [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Cognito</FONT></TD><TD ROWSPAN="2" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides user management and<BR/>authentication</FONT></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1,
            margin="0.139,0.362"];
    }
    ui [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">All the frontend applications of the cloud<BR/>system</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui",
        likec4_level=0,
        margin="0.417,0.445"];
    ui -> graphql [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui:cloud.backend.graphql",
        style=dashed,
        weight=5];
    ui -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws.cognito",
        style=dashed,
        weight=3];
    graphql -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authorizes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend.graphql:aws.cognito",
        style=dashed,
        weight=5];
    graphql -> tbl_sessions [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend.graphql:aws.pg.tbl_sessions",
        style=dashed,
        weight=5];
    graphql -> tbl_customers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend.graphql:aws.pg.tbl_customers",
        style=dashed,
        weight=5];
}
`;case"aws_pg":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        backend [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.362,0.362"];
    }
    subgraph cluster_pg {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AWS - POSTGRESQL</B></FONT>>,
            likec4_depth=1,
            likec4_id="aws.pg",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        tbl_sessions [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">[ sessions ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Active sessions of<BR/>authenticated customers</FONT></TD></TR></TABLE>>,
            likec4_id="aws.pg.tbl_sessions",
            likec4_level=1,
            margin="0.362,0",
            penwidth=2,
            shape=cylinder];
        tbl_customers [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">[ customers ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR></TABLE>>,
            likec4_id="aws.pg.tbl_customers",
            likec4_level=1,
            margin="0.362,0",
            penwidth=2,
            shape=cylinder];
        tbl_sessions -> tbl_customers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">references to</FONT></TD></TR></TABLE>>,
            likec4_id="aws.pg.tbl_sessions:aws.pg.tbl_customers",
            minlen=0,
            style=solid,
            weight=3];
    }
    backend -> tbl_sessions [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg.tbl_sessions",
        style=dashed,
        weight=3];
    backend -> tbl_customers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg.tbl_customers",
        style=dashed,
        weight=3];
}
`;case"cloud_ui":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_ui {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FRONTEND</B></FONT>>,
            likec4_depth=1,
            likec4_id="cloud.ui",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        dashboard [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Customer Dashboard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">NextJS</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Web application, that allows customers to<BR/>interact with the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui.dashboard",
            likec4_level=1,
            margin="0.417,0.445"];
        mobile [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="96" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Mobile App</FONT></TD><TD ROWSPAN="3" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Flutter</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">The mobile app of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui.mobile",
            likec4_level=1,
            margin="0.139,0.362"];
    }
    subgraph cluster_aws {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AMAZON WEB SERVICES</B></FONT>>,
            likec4_depth=1,
            likec4_id=aws,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        pg [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">PostgreSQL</FONT></TD><TD ROWSPAN="3" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">AWS Aurora PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Database for storing relational<BR/>data</FONT></TD></TR></TABLE>>,
            likec4_id="aws.pg",
            likec4_level=1,
            margin="0.139,0",
            penwidth=2,
            shape=cylinder];
        cognito [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Cognito</FONT></TD><TD ROWSPAN="2" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Provides user management and<BR/>authentication</FONT></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1,
            margin="0.139,0.362"];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> dashboard [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">opens in browser</FONT></TD></TR></TABLE>>,
        likec4_id="customer:cloud.ui.dashboard",
        style=dashed,
        weight=4];
    customer -> mobile [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">opens on mobile device</FONT></TD></TR></TABLE>>,
        likec4_id="customer:cloud.ui.mobile",
        style=dashed,
        weight=4];
    backend [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend",
        likec4_level=0,
        margin="0.362,0.362"];
    backend -> pg [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg",
        minlen=1,
        style=dashed,
        weight=3];
    dashboard -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui.dashboard:cloud.backend",
        style=dashed,
        weight=5];
    dashboard -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui.dashboard:aws.cognito",
        style=dashed,
        weight=4];
    mobile -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui.mobile:cloud.backend",
        style=dashed,
        weight=5];
    mobile -> cognito [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.ui.mobile:aws.cognito",
        style=dashed,
        weight=4];
}
`;default:throw new Error("Unknown viewId: "+e)}}function l(e){switch(e){case"aws_cognito":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="786pt" height="574pt"
 viewBox="0.00 0.00 785.66 574.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 559.05)">
<g id="clust1" class="cluster">
<title>cluster_aws</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="178.16,-8 178.16,-273.2 576.16,-273.2 576.16,-8 178.16,-8"/>
<text text-anchor="start" x="186.16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- cognito -->
<g id="node1" class="node">
<title>cognito</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="544.17,-220 210.15,-220 210.15,-40 544.17,-40 544.17,-220"/>
<text text-anchor="start" x="262.22" y="-125.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="308.16" y="-143.4" font-family="Arial" font-size="19.00" fill="#eff6ff">Cognito</text>
<text text-anchor="start" x="518.22" y="-125.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="308.16" y="-119.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides user management and</text>
<text text-anchor="start" x="308.16" y="-103.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">authentication</text>
</g>
<!-- ui -->
<g id="node2" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.32,-544 0,-544 0,-364 320.32,-364 320.32,-544"/>
<text text-anchor="start" x="122.14" y="-468.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="36.02" y="-443.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">All the frontend applications of the cloud</text>
<text text-anchor="start" x="137.99" y="-427" font-family="Arial" font-size="14.00" fill="#bfdbfe">system</text>
</g>
<!-- backend -->
<g id="node3" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="755.57,-544 430.76,-544 430.76,-364 755.57,-364 755.57,-544"/>
<text text-anchor="start" x="556.19" y="-459.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="462.82" y="-435.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- ui&#45;&gt;cognito -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M220.03,-364.16C248.43,-322.01 282.44,-271.55 311.55,-228.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="313.59,-230.03 315.61,-222.34 309.24,-227.09 313.59,-230.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="275.17,-281.2 275.17,-304 364.45,-304 364.45,-281.2 275.17,-281.2"/>
<text text-anchor="start" x="278.17" y="-288.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- backend&#45;&gt;cognito -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M533.57,-364.16C505.29,-322.01 471.44,-271.55 442.47,-228.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="444.79,-227.11 438.44,-222.34 440.43,-230.03 444.79,-227.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="491.64,-281.2 491.64,-304 562.23,-304 562.23,-281.2 491.64,-281.2"/>
<text text-anchor="start" x="494.64" y="-288.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">authorizes</text>
</g>
</g>
</svg>
`;case"aws":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="892pt" height="659pt"
 viewBox="0.00 0.00 892.10 659.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 644.25)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="15,-340 15,-621.2 850,-621.2 850,-340 15,-340"/>
<text text-anchor="start" x="23" y="-608.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_aws</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 854,-289.2 854,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- ui -->
<g id="node1" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="375.16,-560 54.84,-560 54.84,-380 375.16,-380 375.16,-560"/>
<text text-anchor="start" x="176.98" y="-484.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="90.86" y="-459.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">All the frontend applications of the cloud</text>
<text text-anchor="start" x="192.83" y="-443" font-family="Arial" font-size="14.00" fill="#bfdbfe">system</text>
</g>
<!-- backend -->
<g id="node2" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="810.4,-560 485.6,-560 485.6,-380 810.4,-380 810.4,-560"/>
<text text-anchor="start" x="611.03" y="-475.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="517.66" y="-451.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- cognito -->
<g id="node3" class="node">
<title>cognito</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="382.01,-228 47.99,-228 47.99,-48 382.01,-48 382.01,-228"/>
<text text-anchor="start" x="100.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="146" y="-151.4" font-family="Arial" font-size="19.00" fill="#eff6ff">Cognito</text>
<text text-anchor="start" x="356.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="146" y="-127.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides user management and</text>
<text text-anchor="start" x="146" y="-111.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">authentication</text>
</g>
<!-- pg -->
<g id="node4" class="node">
<title>pg</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M814.01,-211.64C814.01,-220.67 741.84,-228 653,-228 564.16,-228 491.99,-220.67 491.99,-211.64 491.99,-211.64 491.99,-64.36 491.99,-64.36 491.99,-55.33 564.16,-48 653,-48 741.84,-48 814.01,-55.33 814.01,-64.36 814.01,-64.36 814.01,-211.64 814.01,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M814.01,-211.64C814.01,-202.61 741.84,-195.27 653,-195.27 564.16,-195.27 491.99,-202.61 491.99,-211.64"/>
<text text-anchor="start" x="544.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="590" y="-161.4" font-family="Arial" font-size="19.00" fill="#eff6ff">PostgreSQL</text>
<text text-anchor="start" x="788.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="590" y="-139.7" font-family="Arial" font-size="12.00" fill="#bfdbfe">AWS Aurora PostgreSQL</text>
<text text-anchor="start" x="590" y="-117.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Database for storing relational</text>
<text text-anchor="start" x="590" y="-101.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">data</text>
</g>
<!-- ui&#45;&gt;cognito -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M215,-380.13C215,-336.3 215,-283.28 215,-238.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="217.63,-238.27 215,-230.77 212.38,-238.27 217.63,-238.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="215,-297.2 215,-320 304.28,-320 304.28,-297.2 215,-297.2"/>
<text text-anchor="start" x="218" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- backend&#45;&gt;cognito -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M531.39,-380.13C472.06,-334.91 399.91,-279.93 339.5,-233.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="341.4,-232.03 333.85,-229.58 338.22,-236.21 341.4,-232.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="444.48,-297.2 444.48,-320 515.08,-320 515.08,-297.2 444.48,-297.2"/>
<text text-anchor="start" x="447.48" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">authorizes</text>
</g>
<!-- backend&#45;&gt;pg -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M649.35,-380.13C650.01,-336.65 650.8,-284.14 651.48,-239.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="654.1,-239.45 651.59,-231.91 648.85,-239.37 654.1,-239.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="650.5,-297.2 650.5,-320 731.97,-320 731.97,-297.2 650.5,-297.2"/>
<text text-anchor="start" x="653.5" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
</g>
</svg>
`;case"cloud":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="962pt" height="865pt"
 viewBox="0.00 0.00 962.10 864.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 849.85)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-564 924,-564 924,-282.8 8,-282.8"/>
<text text-anchor="start" x="16" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<!-- ui -->
<g id="node1" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.16,-502.8 47.84,-502.8 47.84,-322.8 368.16,-322.8 368.16,-502.8"/>
<text text-anchor="start" x="169.98" y="-426.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="83.86" y="-402.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">All the frontend applications of the cloud</text>
<text text-anchor="start" x="185.83" y="-385.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">system</text>
</g>
<!-- backend -->
<g id="node2" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="884.4,-502.8 559.6,-502.8 559.6,-322.8 884.4,-322.8 884.4,-502.8"/>
<text text-anchor="start" x="685.03" y="-418.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="591.66" y="-394.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- customer -->
<g id="node3" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-834.8 47.98,-834.8 47.98,-654.8 368.02,-654.8 368.02,-834.8"/>
<text text-anchor="start" x="166.82" y="-750.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="115.41" y="-726.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- aws -->
<g id="node4" class="node">
<title>aws</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="372.01,-180 43.99,-180 43.99,0 372.01,0 372.01,-180"/>
<text text-anchor="start" x="96.06" y="-85.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="142" y="-103.4" font-family="Arial" font-size="19.00" fill="#eff6ff">Amazon Web Services</text>
<text text-anchor="start" x="346.06" y="-85.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="142" y="-79.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Cloud Infrastructure and</text>
<text text-anchor="start" x="142" y="-63.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">Managed Services</text>
</g>
<!-- ui&#45;&gt;backend -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.82,-412.8C425.36,-412.8 490.53,-412.8 549.14,-412.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="549.1,-415.43 556.6,-412.8 549.1,-410.18 549.1,-415.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.74,-415.8 422.74,-438.6 505.02,-438.6 505.02,-415.8 422.74,-415.8"/>
<text text-anchor="start" x="425.74" y="-423" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- ui&#45;&gt;aws -->
<g id="edge3" class="edge">
<title>ui&#45;&gt;aws</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-322.87C208,-281.67 208,-232.56 208,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-190.36 208,-182.86 205.38,-190.36 210.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-240 208,-262.8 297.28,-262.8 297.28,-240 208,-240"/>
<text text-anchor="start" x="211" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- backend&#45;&gt;aws -->
<g id="edge4" class="edge">
<title>backend&#45;&gt;aws</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M579.5,-322.87C510.98,-280.1 428.81,-228.81 359.19,-185.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="360.65,-183.18 352.89,-181.43 357.87,-187.63 360.65,-183.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="480.41,-240 480.41,-262.8 507.4,-262.8 507.4,-240 480.41,-240"/>
<text text-anchor="start" x="483.41" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- customer&#45;&gt;ui -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-654.93C208,-611.1 208,-558.08 208,-512.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-513.07 208,-505.57 205.38,-513.07 210.63,-513.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-572 208,-594.8 345.52,-594.8 345.52,-572 208,-572"/>
<text text-anchor="start" x="211" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses web and mobile</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="358pt" height="856pt"
 viewBox="0.00 0.00 358.11 855.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="324.03,-825.6 3.99,-825.6 3.99,-645.6 324.03,-645.6 324.03,-825.6"/>
<text text-anchor="start" x="122.83" y="-741.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="71.42" y="-717" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- cloud -->
<g id="node2" class="node">
<title>cloud</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="324.03,-502.8 3.99,-502.8 3.99,-322.8 324.03,-322.8 324.03,-502.8"/>
<text text-anchor="start" x="104.87" y="-435.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Cloud System</text>
<text text-anchor="start" x="71.02" y="-411" font-family="Arial" font-size="14.00" fill="#bfdbfe">Our SaaS platfrom that allows</text>
<text text-anchor="start" x="84.65" y="-394.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">customers to interact with</text>
<text text-anchor="start" x="94.35" y="-377.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">the latest technologies</text>
</g>
<!-- aws -->
<g id="node3" class="node">
<title>aws</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="328.02,-180 0,-180 0,0 328.02,0 328.02,-180"/>
<text text-anchor="start" x="52.06" y="-85.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="98.01" y="-103.4" font-family="Arial" font-size="19.00" fill="#eff6ff">Amazon Web Services</text>
<text text-anchor="start" x="302.06" y="-85.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="98.01" y="-79.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Cloud Infrastructure and</text>
<text text-anchor="start" x="98.01" y="-63.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">Managed Services</text>
</g>
<!-- customer&#45;&gt;cloud -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M164.01,-645.67C164.01,-604.47 164.01,-555.36 164.01,-512.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="166.63,-513.16 164.01,-505.66 161.38,-513.16 166.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="164.01,-562.8 164.01,-585.6 260.29,-585.6 260.29,-562.8 164.01,-562.8"/>
<text text-anchor="start" x="167.01" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses and pays</text>
</g>
<!-- cloud&#45;&gt;aws -->
<g id="edge2" class="edge">
<title>cloud&#45;&gt;aws</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M164.01,-322.87C164.01,-281.67 164.01,-232.56 164.01,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="166.63,-190.36 164.01,-182.86 161.38,-190.36 166.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="164.01,-240 164.01,-262.8 254.81,-262.8 254.81,-240 164.01,-240"/>
<text text-anchor="start" x="167.01" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses services</text>
</g>
</g>
</svg>
`;case"cloud_backend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1448pt" height="1015pt"
 viewBox="0.00 0.00 1448.10 1015.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1000.25)">
<g id="clust1" class="cluster">
<title>cluster_backend</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="574,-449.2 574,-714.4 958,-714.4 958,-449.2 574,-449.2"/>
<text text-anchor="start" x="582" y="-701.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKEND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_aws</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-390.4 1410,-390.4 1410,-8 8,-8"/>
<text text-anchor="start" x="16" y="-377.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_pg</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-48 48,-329.2 966,-329.2 966,-48 48,-48"/>
<text text-anchor="start" x="56" y="-316.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">POSTGRESQL</text>
</g>
<!-- graphql -->
<g id="node1" class="node">
<title>graphql</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.02,-661.2 605.98,-661.2 605.98,-481.2 926.02,-481.2 926.02,-661.2"/>
<text text-anchor="start" x="708.97" y="-576.9" font-family="Arial" font-size="19.00" fill="#eff6ff">GraphQL API</text>
<text text-anchor="start" x="647.72" y="-552.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">The GraphQL API of the cloud system</text>
</g>
<!-- tbl_sessions -->
<g id="node2" class="node">
<title>tbl_sessions</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M408.02,-251.64C408.02,-260.67 336.3,-268 248,-268 159.7,-268 87.98,-260.67 87.98,-251.64 87.98,-251.64 87.98,-104.36 87.98,-104.36 87.98,-95.33 159.7,-88 248,-88 336.3,-88 408.02,-95.33 408.02,-104.36 408.02,-104.36 408.02,-251.64 408.02,-251.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M408.02,-251.64C408.02,-242.61 336.3,-235.27 248,-235.27 159.7,-235.27 87.98,-242.61 87.98,-251.64"/>
<text text-anchor="start" x="200.48" y="-202.3" font-family="Arial" font-size="19.00" fill="#eff6ff">[ sessions ]</text>
<text text-anchor="start" x="189.97" y="-179.8" font-family="Arial" font-size="12.00" fill="#bfdbfe">&lt;&lt; private schema &gt;&gt;</text>
<text text-anchor="start" x="191.98" y="-157.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">Active sessions of</text>
<text text-anchor="start" x="171.73" y="-140.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">authenticated customers</text>
</g>
<!-- tbl_customers -->
<g id="node3" class="node">
<title>tbl_customers</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M926.02,-251.64C926.02,-260.67 854.3,-268 766,-268 677.7,-268 605.98,-260.67 605.98,-251.64 605.98,-251.64 605.98,-104.36 605.98,-104.36 605.98,-95.33 677.7,-88 766,-88 854.3,-88 926.02,-95.33 926.02,-104.36 926.02,-104.36 926.02,-251.64 926.02,-251.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M926.02,-251.64C926.02,-242.61 854.3,-235.27 766,-235.27 677.7,-235.27 605.98,-242.61 605.98,-251.64"/>
<text text-anchor="start" x="711.63" y="-182.5" font-family="Arial" font-size="19.00" fill="#eff6ff">[ customers ]</text>
<text text-anchor="start" x="707.97" y="-160" font-family="Arial" font-size="12.00" fill="#bfdbfe">&lt;&lt; private schema &gt;&gt;</text>
</g>
<!-- cognito -->
<g id="node4" class="node">
<title>cognito</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1370.01,-268 1035.99,-268 1035.99,-88 1370.01,-88 1370.01,-268"/>
<text text-anchor="start" x="1088.06" y="-173.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1134" y="-191.4" font-family="Arial" font-size="19.00" fill="#eff6ff">Cognito</text>
<text text-anchor="start" x="1344.06" y="-173.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1134" y="-167.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides user management and</text>
<text text-anchor="start" x="1134" y="-151.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">authentication</text>
</g>
<!-- ui -->
<g id="node5" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.16,-985.2 605.84,-985.2 605.84,-805.2 926.16,-805.2 926.16,-985.2"/>
<text text-anchor="start" x="727.98" y="-909.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="641.86" y="-885" font-family="Arial" font-size="14.00" fill="#bfdbfe">All the frontend applications of the cloud</text>
<text text-anchor="start" x="743.83" y="-868.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">system</text>
</g>
<!-- graphql&#45;&gt;tbl_sessions -->
<g id="edge5" class="edge">
<title>graphql&#45;&gt;tbl_sessions</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M648.46,-481.43C565.84,-419.04 455.52,-335.72 371.59,-272.33"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="373.28,-270.32 365.71,-267.89 370.11,-274.51 373.28,-270.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="568.63,-398.4 568.63,-421.2 650.1,-421.2 650.1,-398.4 568.63,-398.4"/>
<text text-anchor="start" x="571.63" y="-405.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- graphql&#45;&gt;tbl_customers -->
<g id="edge6" class="edge">
<title>graphql&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M766,-481.43C766,-421.21 766,-341.51 766,-279.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="768.63,-279.3 766,-271.8 763.38,-279.3 768.63,-279.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="766,-398.4 766,-421.2 847.47,-421.2 847.47,-398.4 766,-398.4"/>
<text text-anchor="start" x="769" y="-405.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- graphql&#45;&gt;cognito -->
<g id="edge4" class="edge">
<title>graphql&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M883.66,-481.32C919.5,-453.11 958.51,-421.22 993,-390.4 1033.5,-354.2 1076.11,-312.14 1112.28,-275.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1113.96,-277.14 1117.31,-269.94 1110.2,-273.48 1113.96,-277.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="981.33,-398.4 981.33,-421.2 1051.92,-421.2 1051.92,-398.4 981.33,-398.4"/>
<text text-anchor="start" x="984.33" y="-405.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">authorizes</text>
</g>
<!-- tbl_sessions&#45;&gt;tbl_customers -->
<g id="edge1" class="edge">
<title>tbl_sessions&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" d="M408.7,-178C467.82,-178 534.95,-178 594.94,-178"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="594.75,-180.63 602.25,-178 594.75,-175.38 594.75,-180.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="463.15,-181 463.15,-203.8 550.85,-203.8 550.85,-181 463.15,-181"/>
<text text-anchor="start" x="466.15" y="-188.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">references to</text>
</g>
<!-- ui&#45;&gt;graphql -->
<g id="edge2" class="edge">
<title>ui&#45;&gt;graphql</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M766,-805.36C766,-763.83 766,-714.22 766,-671.46"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="768.63,-671.56 766,-664.06 763.38,-671.56 768.63,-671.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="766,-722.4 766,-745.2 848.28,-745.2 848.28,-722.4 766,-722.4"/>
<text text-anchor="start" x="769" y="-729.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- ui&#45;&gt;cognito -->
<g id="edge3" class="edge">
<title>ui&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M895.97,-805.29C928.1,-778.83 960.34,-747.86 985,-714.4 1084.83,-578.91 1147.41,-391.2 1178.71,-277.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1181.22,-278.6 1180.66,-270.67 1176.15,-277.22 1181.22,-278.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1121.7,-559.8 1121.7,-582.6 1210.99,-582.6 1210.99,-559.8 1121.7,-559.8"/>
<text text-anchor="start" x="1124.7" y="-567" font-family="Arial" font-size="14.00" fill="#c6c6c6">authenticates</text>
</g>
</g>
</svg>
`;case"aws_pg":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="964pt" height="651pt"
 viewBox="0.00 0.00 964.10 651.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 636.25)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="313,-348 313,-613.2 701,-613.2 701,-348 313,-348"/>
<text text-anchor="start" x="321" y="-600.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_pg</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 926,-289.2 926,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AWS &#45; POSTGRESQL</text>
</g>
<!-- backend -->
<g id="node1" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="669.4,-560 344.6,-560 344.6,-380 669.4,-380 669.4,-560"/>
<text text-anchor="start" x="470.03" y="-475.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="376.66" y="-451.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- tbl_sessions -->
<g id="node2" class="node">
<title>tbl_sessions</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M368.02,-211.64C368.02,-220.67 296.3,-228 208,-228 119.7,-228 47.98,-220.67 47.98,-211.64 47.98,-211.64 47.98,-64.36 47.98,-64.36 47.98,-55.33 119.7,-48 208,-48 296.3,-48 368.02,-55.33 368.02,-64.36 368.02,-64.36 368.02,-211.64 368.02,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M368.02,-211.64C368.02,-202.61 296.3,-195.27 208,-195.27 119.7,-195.27 47.98,-202.61 47.98,-211.64"/>
<text text-anchor="start" x="160.48" y="-162.3" font-family="Arial" font-size="19.00" fill="#eff6ff">[ sessions ]</text>
<text text-anchor="start" x="149.97" y="-139.8" font-family="Arial" font-size="12.00" fill="#bfdbfe">&lt;&lt; private schema &gt;&gt;</text>
<text text-anchor="start" x="151.98" y="-117.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">Active sessions of</text>
<text text-anchor="start" x="131.73" y="-100.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">authenticated customers</text>
</g>
<!-- tbl_customers -->
<g id="node3" class="node">
<title>tbl_customers</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M886.02,-211.64C886.02,-220.67 814.3,-228 726,-228 637.7,-228 565.98,-220.67 565.98,-211.64 565.98,-211.64 565.98,-64.36 565.98,-64.36 565.98,-55.33 637.7,-48 726,-48 814.3,-48 886.02,-55.33 886.02,-64.36 886.02,-64.36 886.02,-211.64 886.02,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M886.02,-211.64C886.02,-202.61 814.3,-195.27 726,-195.27 637.7,-195.27 565.98,-202.61 565.98,-211.64"/>
<text text-anchor="start" x="671.63" y="-142.5" font-family="Arial" font-size="19.00" fill="#eff6ff">[ customers ]</text>
<text text-anchor="start" x="667.97" y="-120" font-family="Arial" font-size="12.00" fill="#bfdbfe">&lt;&lt; private schema &gt;&gt;</text>
</g>
<!-- backend&#45;&gt;tbl_sessions -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;tbl_sessions</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M426.48,-380.13C386.26,-335.74 337.5,-281.92 296.26,-236.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="298.46,-234.93 291.48,-231.13 294.57,-238.45 298.46,-234.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="366.47,-297.2 366.47,-320 447.93,-320 447.93,-297.2 366.47,-297.2"/>
<text text-anchor="start" x="369.47" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- backend&#45;&gt;tbl_customers -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M565.98,-380.13C595.19,-336.1 630.56,-282.81 660.61,-237.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="662.71,-239.11 664.67,-231.41 658.34,-236.21 662.71,-239.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="616.5,-297.2 616.5,-320 697.97,-320 697.97,-297.2 616.5,-297.2"/>
<text text-anchor="start" x="619.5" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- tbl_sessions&#45;&gt;tbl_customers -->
<g id="edge1" class="edge">
<title>tbl_sessions&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" d="M368.7,-138C427.82,-138 494.95,-138 554.94,-138"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="554.75,-140.63 562.25,-138 554.75,-135.38 554.75,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423.15,-141 423.15,-163.8 510.85,-163.8 510.85,-141 423.15,-141"/>
<text text-anchor="start" x="426.15" y="-148.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">references to</text>
</g>
</g>
</svg>
`;case"cloud_ui":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1029pt" height="1245pt"
 viewBox="0.00 0.00 1029.10 1244.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1229.85)">
<g id="clust1" class="cluster">
<title>cluster_ui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="94,-662.8 94,-944 991,-944 991,-662.8 94,-662.8"/>
<text text-anchor="start" x="102" y="-931.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FRONTEND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_aws</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 854,-289.2 854,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- dashboard -->
<g id="node1" class="node">
<title>dashboard</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="463.81,-882.8 134.19,-882.8 134.19,-702.8 463.81,-702.8 463.81,-882.8"/>
<text text-anchor="start" x="208.71" y="-817.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Dashboard</text>
<text text-anchor="start" x="279.66" y="-794.6" font-family="Arial" font-size="12.00" fill="#bfdbfe">NextJS</text>
<text text-anchor="start" x="170.22" y="-772.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Web application, that allows customers to</text>
<text text-anchor="start" x="207.18" y="-755.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">interact with the cloud system</text>
</g>
<!-- mobile -->
<g id="node2" class="node">
<title>mobile</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="950.51,-882.8 573.49,-882.8 573.49,-702.8 950.51,-702.8 950.51,-882.8"/>
<text text-anchor="start" x="635.56" y="-788.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="691.5" y="-807.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="924.56" y="-788.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="691.5" y="-786" font-family="Arial" font-size="12.00" fill="#bfdbfe">Flutter</text>
<text text-anchor="start" x="691.5" y="-764.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">The mobile app of the cloud system</text>
</g>
<!-- pg -->
<g id="node3" class="node">
<title>pg</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M370.01,-211.64C370.01,-220.67 297.84,-228 209,-228 120.16,-228 47.99,-220.67 47.99,-211.64 47.99,-211.64 47.99,-64.36 47.99,-64.36 47.99,-55.33 120.16,-48 209,-48 297.84,-48 370.01,-55.33 370.01,-64.36 370.01,-64.36 370.01,-211.64 370.01,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M370.01,-211.64C370.01,-202.61 297.84,-195.27 209,-195.27 120.16,-195.27 47.99,-202.61 47.99,-211.64"/>
<text text-anchor="start" x="100.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="146" y="-161.4" font-family="Arial" font-size="19.00" fill="#eff6ff">PostgreSQL</text>
<text text-anchor="start" x="344.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="146" y="-139.7" font-family="Arial" font-size="12.00" fill="#bfdbfe">AWS Aurora PostgreSQL</text>
<text text-anchor="start" x="146" y="-117.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Database for storing relational</text>
<text text-anchor="start" x="146" y="-101.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">data</text>
</g>
<!-- cognito -->
<g id="node4" class="node">
<title>cognito</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="814.01,-228 479.99,-228 479.99,-48 814.01,-48 814.01,-228"/>
<text text-anchor="start" x="532.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="578" y="-151.4" font-family="Arial" font-size="19.00" fill="#eff6ff">Cognito</text>
<text text-anchor="start" x="788.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="578" y="-127.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides user management and</text>
<text text-anchor="start" x="578" y="-111.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">authentication</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="690.02,-1214.8 369.98,-1214.8 369.98,-1034.8 690.02,-1034.8 690.02,-1214.8"/>
<text text-anchor="start" x="488.82" y="-1130.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="437.41" y="-1106.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- backend -->
<g id="node6" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="371.4,-560 46.6,-560 46.6,-380 371.4,-380 371.4,-560"/>
<text text-anchor="start" x="172.03" y="-475.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="78.66" y="-451.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- dashboard&#45;&gt;cognito -->
<g id="edge5" class="edge">
<title>dashboard&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M348.22,-702.84C371.92,-659.8 400.62,-607.31 426,-560 485.1,-449.8 551.64,-322.61 596.12,-237.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="598.36,-238.5 599.5,-230.63 593.71,-236.07 598.36,-238.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="521.1,-458.6 521.1,-481.4 610.39,-481.4 610.39,-458.6 521.1,-458.6"/>
<text text-anchor="start" x="524.1" y="-465.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- dashboard&#45;&gt;backend -->
<g id="edge4" class="edge">
<title>dashboard&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M274.05,-702.87C262.47,-661.58 248.66,-612.35 236.75,-569.9"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="239.29,-569.26 234.74,-562.74 234.24,-570.67 239.29,-569.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="256.7,-620 256.7,-642.8 338.97,-642.8 338.97,-620 256.7,-620"/>
<text text-anchor="start" x="259.7" y="-627.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- mobile&#45;&gt;cognito -->
<g id="edge7" class="edge">
<title>mobile&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M753.03,-702.98C743.89,-619.27 728.07,-490.53 707,-380 698.01,-332.85 685.49,-281.13 674.22,-237.73"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="676.81,-237.27 672.37,-230.68 671.73,-238.6 676.81,-237.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="734.97,-458.6 734.97,-481.4 824.26,-481.4 824.26,-458.6 734.97,-458.6"/>
<text text-anchor="start" x="737.97" y="-465.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- mobile&#45;&gt;backend -->
<g id="edge6" class="edge">
<title>mobile&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M608.69,-702.87C534.82,-660.01 446.2,-608.6 371.2,-565.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="372.55,-562.84 364.74,-561.35 369.91,-567.38 372.55,-562.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="502.08,-620 502.08,-642.8 584.36,-642.8 584.36,-620 502.08,-620"/>
<text text-anchor="start" x="505.08" y="-627.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- customer&#45;&gt;dashboard -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;dashboard</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M467.79,-1034.93C436.66,-990.45 398.9,-936.52 367,-890.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="369.31,-889.66 362.85,-885.02 365,-892.67 369.31,-889.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="421.43,-952 421.43,-974.8 534.04,-974.8 534.04,-952 421.43,-952"/>
<text text-anchor="start" x="424.43" y="-959.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">opens in browser</text>
</g>
<!-- customer&#45;&gt;mobile -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobile</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M592.48,-1034.93C623.75,-990.45 661.66,-936.52 693.7,-890.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="695.71,-892.66 697.87,-885.02 691.41,-889.64 695.71,-892.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="646,-952 646,-974.8 799.1,-974.8 799.1,-952 646,-952"/>
<text text-anchor="start" x="649" y="-959.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">opens on mobile device</text>
</g>
<!-- backend&#45;&gt;pg -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M209,-380.13C209,-336.65 209,-284.14 209,-239.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="211.63,-239.41 209,-231.91 206.38,-239.41 211.63,-239.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="209,-297.2 209,-320 290.47,-320 290.47,-297.2 209,-297.2"/>
<text text-anchor="start" x="212" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}function o(e){switch(e){case"aws_cognito":return`---\r
title: "Cognito"\r
---\r
graph TB\r
  CloudUi[Frontend]\r
  CloudBackend[Backend]\r
  subgraph Aws["Amazon Web Services"]\r
    Aws.Cognito[Cognito]\r
  end\r
  CloudUi -. "authenticates" .-> Aws.Cognito\r
  CloudBackend -. "authorizes" .-> Aws.Cognito\r
`;case"aws":return`---\r
title: "Context: Amazon Web Services"\r
---\r
graph TB\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Ui[Frontend]\r
    Cloud.Backend[Backend]\r
  end\r
  subgraph Aws["Amazon Web Services"]\r
    Aws.Cognito[Cognito]\r
    Aws.Pg([PostgreSQL])\r
  end\r
  Cloud.Ui -. "authenticates" .-> Aws.Cognito\r
  Cloud.Backend -. "reads/writes" .-> Aws.Pg\r
  Cloud.Backend -. "authorizes" .-> Aws.Cognito\r
`;case"cloud":return`---\r
title: "Context: Cloud System"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Ui[Frontend]\r
    Cloud.Backend[Backend]\r
  end\r
  Aws[Amazon Web Services]\r
  Customer -. "uses web and mobile" .-> Cloud.Ui\r
  Cloud.Ui -. "fetches data" .-> Cloud.Backend\r
  Cloud.Ui -. "authenticates" .-> Aws\r
  Cloud.Backend -. "[...]" .-> Aws\r
`;case"index":return`---\r
title: "System Landscape"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  Cloud[Cloud System]\r
  Aws[Amazon Web Services]\r
  Customer -. "uses and pays" .-> Cloud\r
  Cloud -. "uses services" .-> Aws\r
`;case"cloud_backend":return`---\r
title: "Backend"\r
---\r
graph TB\r
  CloudUi[Frontend]\r
  subgraph CloudBackend["Backend"]\r
    CloudBackend.Graphql[GraphQL API]\r
  end\r
  subgraph Aws["Amazon Web Services"]\r
    subgraph Aws.Pg["PostgreSQL"]\r
      Aws.Pg.Tbl_sessions([[ sessions ]])\r
      Aws.Pg.Tbl_customers([[ customers ]])\r
    end\r
    Aws.Cognito[Cognito]\r
  end\r
  CloudUi -. "fetches data" .-> CloudBackend.Graphql\r
  CloudUi -. "authenticates" .-> Aws.Cognito\r
  CloudBackend.Graphql -. "reads/writes" .-> Aws.Pg.Tbl_sessions\r
  CloudBackend.Graphql -. "reads/writes" .-> Aws.Pg.Tbl_customers\r
  CloudBackend.Graphql -. "authorizes" .-> Aws.Cognito\r
  Aws.Pg.Tbl_sessions -. "references to" .-> Aws.Pg.Tbl_customers\r
`;case"aws_pg":return`---\r
title: "Databases"\r
---\r
graph TB\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Backend[Backend]\r
  end\r
  subgraph AwsPg["AWS - PostgreSQL"]\r
    AwsPg.Tbl_sessions([[ sessions ]])\r
    AwsPg.Tbl_customers([[ customers ]])\r
  end\r
  Cloud.Backend -. "reads/writes" .-> AwsPg.Tbl_sessions\r
  Cloud.Backend -. "reads/writes" .-> AwsPg.Tbl_customers\r
  AwsPg.Tbl_sessions -. "references to" .-> AwsPg.Tbl_customers\r
`;case"cloud_ui":return`---\r
title: "Frontend"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph CloudUi["Frontend"]\r
    CloudUi.Dashboard[Customer Dashboard]\r
    CloudUi.Mobile[Mobile App]\r
  end\r
  CloudBackend[Backend]\r
  subgraph Aws["Amazon Web Services"]\r
    Aws.Pg([PostgreSQL])\r
    Aws.Cognito[Cognito]\r
  end\r
  Customer -. "opens on mobile device" .-> CloudUi.Mobile\r
  Customer -. "opens in browser" .-> CloudUi.Dashboard\r
  CloudUi.Dashboard -. "fetches data" .-> CloudBackend\r
  CloudUi.Dashboard -. "authenticates" .-> Aws.Cognito\r
  CloudUi.Mobile -. "fetches data" .-> CloudBackend\r
  CloudUi.Mobile -. "authenticates" .-> Aws.Cognito\r
  CloudBackend -. "reads/writes" .-> Aws.Pg\r
`;default:throw new Error("Unknown viewId: "+e)}}export{t as d2Source,n as dotSource,o as mmdSource,l as svgSource};
