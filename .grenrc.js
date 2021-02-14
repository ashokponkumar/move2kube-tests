module.exports = {
    title_prefix: "[WIP] Move2Kube Tests ",
    // valid PR types: ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']
    sections: [
        { title: "🚀 Features", labels: ["enhancement", "feat", "perf"] },
        { title: "🐛 Bug Fixes", labels: ["bug", "fix", "revert"] },
        { title: "🧹 Maintenance", labels: ["docs", "style", "refactor", "test", "build", "ci", "chore"] },
    ],
    header: `For more documentation and support please visit https://konveyor.io/move2kube/
  # Changelog`,
    line_template: x => `- ${x.title} [#${x.number}](${x.html_url})`,
}
