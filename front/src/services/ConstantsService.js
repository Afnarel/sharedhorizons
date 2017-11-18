

export default {
    SERVICE_CHECKER_API_URL: NODE_ENV === 'development' ? 'https://dev-infra.energy-app.net/instance-status-api' : window.location.origin + '/instance-status-api',
    GCN_TOOLS_API_URL: 'https://gcn-lab.fr/gcn-tools-api'
}