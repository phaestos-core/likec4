function e(t){switch(t){case"aws":return`direction: down\r
\r
Cloud: {\r
  label: "Cloud System"\r
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
Cloud -> Aws: "uses services"\r
`;case"cloud":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Backend: {\r
    label: "Backend"\r
  }\r
  Ui: {\r
    label: "Frontend"\r
  }\r
}\r
\r
Customer -> Cloud.Ui: "uses web and mobile"\r
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
`;case"aws_cognito":return`direction: down\r
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
`;case"aws_pg":return`direction: down\r
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
\r
  Pg: {\r
    label: "AWS - PostgreSQL"\r
    shape: stored_data\r
  }\r
}\r
\r
Customer -> Cloud: "uses and pays"\r
Cloud -> Aws: "uses services"\r
`;case"cloud_backend":return`direction: down\r
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
`;case"cloud_ui":return`direction: down\r
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
`;default:throw new Error("Unknown viewId: "+t)}}function n(t){switch(t){case"aws":return`digraph {
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
    cloud [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Cloud System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Our SaaS platfrom that allows<BR/>customers to interact with<BR/>the latest technologies</FONT></TD></TR></TABLE>>,
        likec4_id=cloud,
        likec4_level=0,
        margin="0.362,0.362"];
    cloud -> pg [lhead=cluster_aws,
        likec4_id="cloud:aws",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses services</FONT></TD></TR></TABLE>>];
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
        backend [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.362,0.362"];
        ui [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">All the frontend applications of the cloud<BR/>system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui",
            likec4_level=1,
            margin="0.417,0.445"];
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
        style=dashed,
        weight=1];
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
`;case"aws_cognito":return`digraph {
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
        pg [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" HEIGHT="16" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">AWS - PostgreSQL</FONT></TD><TD ROWSPAN="3" WIDTH="16" HEIGHT="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">AWS Aurora PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Database for storing relational<BR/>data</FONT></TD></TR></TABLE>>,
            likec4_id="aws.pg",
            likec4_level=1,
            margin="0.139,0",
            penwidth=2,
            shape=cylinder];
    }
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
        minlen=0,
        style=dashed,
        weight=1];
    cloud -> pg [lhead=cluster_aws,
        likec4_id="cloud:aws",
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses services</FONT></TD></TR></TABLE>>];
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
`;default:throw new Error("Unknown viewId: "+t)}}function l(t){switch(t){case"aws":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="892pt" height="558pt"
 viewBox="0.00 0.00 892.10 558.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 543.05)">
<g id="clust1" class="cluster">
<title>cluster_aws</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 854,-289.2 854,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- pg -->
<g id="node1" class="node">
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
<g id="node2" class="node">
<title>cognito</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="814.01,-228 479.99,-228 479.99,-48 814.01,-48 814.01,-228"/>
<text text-anchor="start" x="532.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="578" y="-151.4" font-family="Arial" font-size="19.00" fill="#eff6ff">Cognito</text>
<text text-anchor="start" x="788.06" y="-133.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="578" y="-127.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Provides user management and</text>
<text text-anchor="start" x="578" y="-111.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">authentication</text>
</g>
<!-- cloud -->
<g id="node3" class="node">
<title>cloud</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="369.02,-528 48.98,-528 48.98,-348 369.02,-348 369.02,-528"/>
<text text-anchor="start" x="149.87" y="-460.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Cloud System</text>
<text text-anchor="start" x="116.01" y="-436.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Our SaaS platfrom that allows</text>
<text text-anchor="start" x="129.64" y="-419.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">customers to interact with</text>
<text text-anchor="start" x="139.34" y="-402.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">the latest technologies</text>
</g>
<!-- cloud&#45;&gt;pg -->
<g id="edge1" class="edge">
<title>cloud&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M209,-348.4C209,-332.91 209,-316.37 209,-299.64"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="211.63,-299.72 209,-292.22 206.38,-299.72 211.63,-299.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="118.19,-319.11 118.19,-341.91 209,-341.91 209,-319.11 118.19,-319.11"/>
<text text-anchor="start" x="121.19" y="-326.31" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses services</text>
</g>
</g>
</svg>
`;case"cloud":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="881pt" height="590pt"
 viewBox="0.00 0.00 881.10 590.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 575.05)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 843,-289.2 843,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<!-- backend -->
<g id="node1" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="372.4,-228 47.6,-228 47.6,-48 372.4,-48 372.4,-228"/>
<text text-anchor="start" x="173.03" y="-143.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="79.66" y="-119.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- ui -->
<g id="node2" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="803.16,-228 482.84,-228 482.84,-48 803.16,-48 803.16,-228"/>
<text text-anchor="start" x="604.98" y="-152.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="518.86" y="-127.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">All the frontend applications of the cloud</text>
<text text-anchor="start" x="620.83" y="-111" font-family="Arial" font-size="14.00" fill="#bfdbfe">system</text>
</g>
<!-- customer -->
<g id="node3" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="803.02,-560 482.98,-560 482.98,-380 803.02,-380 803.02,-560"/>
<text text-anchor="start" x="601.82" y="-475.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="550.41" y="-451.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- customer&#45;&gt;ui -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M643,-380.13C643,-336.3 643,-283.28 643,-238.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="645.63,-238.27 643,-230.77 640.38,-238.27 645.63,-238.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="643,-297.2 643,-320 780.52,-320 780.52,-297.2 643,-297.2"/>
<text text-anchor="start" x="646" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses web and mobile</text>
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
`;case"aws_cognito":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case"aws_pg":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="917pt" height="552pt"
 viewBox="0.00 0.00 917.12 552.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 537.25)">
<g id="clust1" class="cluster">
<title>cluster_aws</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="493.02,-8 493.02,-273.2 879.02,-273.2 879.02,-8 493.02,-8"/>
<text text-anchor="start" x="501.02" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- pg -->
<g id="node1" class="node">
<title>pg</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M847.03,-203.64C847.03,-212.67 774.86,-220 686.02,-220 597.18,-220 525.01,-212.67 525.01,-203.64 525.01,-203.64 525.01,-56.36 525.01,-56.36 525.01,-47.33 597.18,-40 686.02,-40 774.86,-40 847.03,-47.33 847.03,-56.36 847.03,-56.36 847.03,-203.64 847.03,-203.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M847.03,-203.64C847.03,-194.61 774.86,-187.27 686.02,-187.27 597.18,-187.27 525.01,-194.61 525.01,-203.64"/>
<text text-anchor="start" x="577.08" y="-125.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="623.02" y="-153.4" font-family="Arial" font-size="19.00" fill="#eff6ff">AWS &#45; PostgreSQL</text>
<text text-anchor="start" x="821.08" y="-125.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="623.02" y="-131.7" font-family="Arial" font-size="12.00" fill="#bfdbfe">AWS Aurora PostgreSQL</text>
<text text-anchor="start" x="623.02" y="-109.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">Database for storing relational</text>
<text text-anchor="start" x="623.02" y="-93.1" font-family="Arial" font-size="14.00" fill="#bfdbfe">data</text>
</g>
<!-- customer -->
<g id="node2" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-522.2 0,-522.2 0,-342.2 320.04,-342.2 320.04,-522.2"/>
<text text-anchor="start" x="118.84" y="-437.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="67.43" y="-413.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- cloud -->
<g id="node3" class="node">
<title>cloud</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="846.04,-522.2 526,-522.2 526,-342.2 846.04,-342.2 846.04,-522.2"/>
<text text-anchor="start" x="626.89" y="-454.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Cloud System</text>
<text text-anchor="start" x="593.03" y="-430.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Our SaaS platfrom that allows</text>
<text text-anchor="start" x="606.66" y="-413.6" font-family="Arial" font-size="14.00" fill="#bfdbfe">customers to interact with</text>
<text text-anchor="start" x="616.36" y="-396.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">the latest technologies</text>
</g>
<!-- customer&#45;&gt;cloud -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M319.98,-432.2C381.97,-432.2 453.02,-432.2 515.94,-432.2"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="515.84,-434.83 523.34,-432.2 515.84,-429.58 515.84,-434.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="374.88,-435.2 374.88,-458 471.16,-458 471.16,-435.2 374.88,-435.2"/>
<text text-anchor="start" x="377.88" y="-442.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses and pays</text>
</g>
<!-- cloud&#45;&gt;pg -->
<g id="edge2" class="edge">
<title>cloud&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M686.02,-342.35C686.02,-323.82 686.02,-303.79 686.02,-283.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="688.65,-283.72 686.02,-276.22 683.4,-283.72 688.65,-283.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="595.21,-307.6 595.21,-330.4 686.02,-330.4 686.02,-307.6 595.21,-307.6"/>
<text text-anchor="start" x="598.21" y="-314.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses services</text>
</g>
</g>
</svg>
`;case"cloud_backend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case"cloud_ui":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;default:throw new Error("Unknown viewId: "+t)}}function o(t){switch(t){case"aws":return`---\r
title: "Context: Amazon Web Services"\r
---\r
graph TB\r
  Cloud[Cloud System]\r
  subgraph Aws["Amazon Web Services"]\r
    Aws.Pg([PostgreSQL])\r
    Aws.Cognito[Cognito]\r
  end\r
  Cloud -. "uses services" .-> Aws\r
`;case"cloud":return`---\r
title: "Context: Cloud System"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Backend[Backend]\r
    Cloud.Ui[Frontend]\r
  end\r
  Customer -. "uses web and mobile" .-> Cloud.Ui\r
`;case"index":return`---\r
title: "System Landscape"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  Cloud[Cloud System]\r
  Aws[Amazon Web Services]\r
  Customer -. "uses and pays" .-> Cloud\r
  Cloud -. "uses services" .-> Aws\r
`;case"aws_cognito":return`graph TB\r
  Customer[fa:fa-user Customer]\r
  Cloud[Cloud System]\r
  Aws[Amazon Web Services]\r
  Customer -. "uses and pays" .-> Cloud\r
  Cloud -. "uses services" .-> Aws\r
`;case"aws_pg":return`---\r
title: "Databases"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  Cloud[Cloud System]\r
  subgraph Aws["Amazon Web Services"]\r
    Aws.Pg([AWS - PostgreSQL])\r
  end\r
  Customer -. "uses and pays" .-> Cloud\r
  Cloud -. "uses services" .-> Aws\r
`;case"cloud_backend":return`graph TB\r
  Customer[fa:fa-user Customer]\r
  Cloud[Cloud System]\r
  Aws[Amazon Web Services]\r
  Customer -. "uses and pays" .-> Cloud\r
  Cloud -. "uses services" .-> Aws\r
`;case"cloud_ui":return`graph TB\r
  Customer[fa:fa-user Customer]\r
  Cloud[Cloud System]\r
  Aws[Amazon Web Services]\r
  Customer -. "uses and pays" .-> Cloud\r
  Cloud -. "uses services" .-> Aws\r
`;default:throw new Error("Unknown viewId: "+t)}}export{e as d2Source,n as dotSource,o as mmdSource,l as svgSource};
