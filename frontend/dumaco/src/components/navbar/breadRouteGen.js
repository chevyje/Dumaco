import {useLocation} from 'react-router-dom';

function breadRouteGen(basePaths = {}) {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((x) => x);

    const breadcrumbs = pathNames.map((segment, index) => {
        const path = '/' + pathNames.slice(0, index + 1).join('/');
        const label = basePaths[path] || decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1));
        return {
            label,
            path: index !== pathNames.length - 1 ? path : null
        };
    });

    return [
        {
            label: basePaths['/home'] || 'Home',
            path: '/home'
        },
        ...breadcrumbs
    ];
}

export default breadRouteGen;
