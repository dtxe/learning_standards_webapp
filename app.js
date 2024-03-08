async function load_students() {
    // load demo_students.yml from local
    const response = await fetch('demo_students.yml');
    const text = await response.text();
    const students = jsyaml.load(text);

    $('#roster').DataTable({
        data: students,
        columns: [
            { data: 'name', title: 'Name' },
            { data: 'studentid', title: 'Student ID' },
            { data: 'username', title: 'UtorID' },
            { data: 'email', title: 'Email' },
            { data: null, title: 'Standards Achieved', render: () => '0%' },
        ]
    })
}

async function load_standards() {
    // load demo_standards.yml from local
    const response = await fetch('demo_standards.yml');
    const text = await response.text();
    const standards = jsyaml.load(text);

    $('#standards').DataTable({
        data: standards,
        columns: [
            { data: 'key', title: 'Key' },
            { data: 'description', title: 'Description' },
            { data: 'tags', title: 'Tags', render: (d) => d.map(t => `<span class="badge rounded-pill bg-secondary">${t}</span>`).join('') },
            { data: null, title: 'Rubric', render: () => ""},
        ]
    });

    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}


load_students();
load_standards();
