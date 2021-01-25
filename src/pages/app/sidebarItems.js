import addComponent from './boxes/addComponent'
import editComponent from './boxes/editComponent'
import Acompanhamento from '../../Acompanhamento'
import Ranking from '../../ranking'
import Aprovar from '../../aprovar'
import Notifications from '../../notifications'
import adminIcon from './assets/adminIcon.svg';
import adicionar from './assets/adicionar.svg';
import adicionarAtivo from './assets/adicionarAtivo.svg'
import editar from './assets/editar.svg';
import editarAtivo from './assets/editarAtivo.svg'
import visto from './assets/visto.svg';
import vistoAtivo from './assets/vistoAtivo.svg'
import notification from './assets/notification.svg';
import notificationAtivo from './assets/notificationAtivo.svg'
import bar_chart from './assets/bar_chart.svg';
import bar_chartAtivo from './assets/bar_chartAtivo.svg'
import indicators from './assets/indicators.svg';
import indicatorsAtivo from './assets/indicatorsAtivo.svg'
import professor from './assets/professor.svg';
import jovemAce from './assets/jovemAce.svg';

const sidebarItems = {
    "admin": {
        "name": "Administrador",
        "logo": adminIcon,
        "items": [
            {
                "name": "Adicionar Componentes",
                "logo": adicionar,
                "component": addComponent,
                "logoAtivo": adicionarAtivo

            },
            {
                "name": "Editar Componentes",
                "logo": editar,
                "component": editComponent,
                "logoAtivo": editarAtivo
            },
            {
                "name": "Aprovar Atividades",
                "logo": visto,
                "logoAtivo": adicionarAtivo
            },
            {
                "name": "Notificações",
                "logo": notification,
                "component": Notifications,
                "logoAtivo": notificationAtivo

            },
            {
                "name": "Consultar Ranking",
                "logo": bar_chart,
                "logoAtivo": bar_chartAtivo,
                "component":Ranking
            },
            {
                "name": "Consultar Indicadores",
                "logo": indicators,
                "logoAtivo": indicatorsAtivo
            }
        ]
    },
    "teacher": {
        "name": "Professor",
        "logo": professor,
        "items": [
            {
                "name": "Acompanhamento",
                "logo": adicionar,
                "component": Acompanhamento,
                "logoAtivo": adicionarAtivo
            },
            {
                "name": "Aprovar Atividades",
                "logo": visto,
                "component": Aprovar,
                "logoAtivo": vistoAtivo
            },
            {
                "name": "Notificações",
                "logo": notification,
                "component": Notifications,
                "logoAtivo": notificationAtivo

            },
            {
                "name": "Consultar Ranking",
                "logo": bar_chart,
                "logoAtivo": bar_chartAtivo
            },
            {
                "name": "Consultar Indicadores",
                "logo": indicators,
                "logoAtivo": indicatorsAtivo
            }
        ]
    },
    "ace": {
        "name": "Jovem ACE",
        "logo": jovemAce,
        "items": [
            {
                "name": "Notificações",
                "logo": notification,
                "component": Notifications,
                "logoAtivo": notificationAtivo

            },
            {
                "name": "Consultar Ranking",
                "logo": bar_chart,
                "logoAtivo": bar_chartAtivo    
            },
            {
                "name": "Consultar Indicadores",
                "logo": indicators,
                "logoAtivo": indicatorsAtivo
            }
        ]
    }
}

export default sidebarItems