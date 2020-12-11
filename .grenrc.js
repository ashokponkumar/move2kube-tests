let printPreamble = true;
const preamble = `For more documentation and support please visit https://konveyor.io/move2kube/
# Changelog
`;

function printPreambleAndGroupName({ heading }) {
    const line = `\n## ${heading}\n`;
    if (printPreamble) {
        printPreamble = false;
        return preamble + line;
    }
    return line;
}

module.exports = {
    "dataSource": "prs",
    "prefix": "Move2Kube Tests ",
    "groupBy":
    {
        "🚀 Features": ["enhancement"],
        "🐛 Bug Fixes": ["bug"]
    },
    "template": {
        "group": printPreambleAndGroupName,
        "issue": ({ name, text, url }) => `- ${name} [${text}](${url})`,
    }
}
