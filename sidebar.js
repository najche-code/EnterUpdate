// sidebar.js - Menú Global Unificado Tributum ERP
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const page = window.location.pathname.split('/').pop().toLowerCase();
    const isCaja = page === 'cajaenter.html' || page === 'caja.html' || page.includes('cajaenter');

    sidebar.innerHTML = `
        <div class="brand-logo"><i class="fa-solid fa-layer-group"></i> TRIBUTUM ERP</div>
        <ul class="menu-list">
            <li class="menu-item ${page === 'index.html' || page === '' ? 'active' : ''}">
                <a class="menu-link" href="index.html">
                    <span class="link-content"><i class="fa-solid fa-house"></i> Inicio / Panel</span>
                </a>
            </li>

            <li class="menu-item ${page === 'empresas.html' ? 'active open' : ''}" id="menu-empresas">
                <a class="menu-link" href="empresas.html#view-admin-empresas">
                    <span class="link-content"><i class="fa-solid fa-building"></i> Empresas</span>
                    <i class="fa-solid fa-chevron-down arrow-icon"></i>
                </a>
                <ul class="submenu ${page === 'empresas.html' ? 'open' : ''}" id="sub-empresas">
                    <li><a href="empresas.html#view-admin-empresas"><i class="fa-regular fa-circle"></i> Administrar Empresas</a></li>
                    <li><a href="empresas.html#view-parametros-comerciales"><i class="fa-regular fa-circle"></i> Parámetros Comerciales</a></li>
                </ul>
            </li>

            <li class="menu-item ${page === 'bancos.html' ? 'active open' : ''}" id="menu-bancos">
                <a class="menu-link" href="Bancos.html#view-operaciones">
                    <span class="link-content"><i class="fa-solid fa-building-columns"></i> Bancos</span>
                    <i class="fa-solid fa-chevron-down arrow-icon"></i>
                </a>
                <ul class="submenu ${page === 'bancos.html' ? 'open' : ''}" id="sub-bancos">
                    <li><a href="Bancos.html#view-operaciones"><i class="fa-regular fa-circle"></i> Operaciones bancarias</a></li>
                    <li><a href="Bancos.html#view-cuentas"><i class="fa-regular fa-circle"></i> Cuentas bancarias</a></li>
                    <li><a href="Bancos.html#view-conciliacion"><i class="fa-regular fa-circle"></i> Conciliación bancaria</a></li>
                    <li><a href="Bancos.html#view-reportes"><i class="fa-regular fa-circle"></i> Reportes Bancarios</a></li>
                </ul>
            </li>

            <li class="menu-item ${page === 'contabilidad.html' ? 'active' : ''}" id="menu-contabilidad">
                <a class="menu-link" href="Contabilidad.html#view-catalogo-cuentas">
                    <span class="link-content"><i class="fa-solid fa-calculator"></i> Contabilidad</span>
                </a>
            </li>

            <li class="menu-item ${page === 'cuentasporpagar.html' ? 'active' : ''}" id="menu-cxp">
                <a class="menu-link" href="CuentasPorPagar.html#view-proveedores">
                    <span class="link-content"><i class="fa-solid fa-file-invoice-dollar"></i> Cuentas por Pagar</span>
                </a>
            </li>

            <li class="menu-item ${page.includes('cajachica') ? 'active open' : ''}" id="menu-cajachica">
                <a class="menu-link" href="CajaChica.html#view-operaciones">
                    <span class="link-content"><i class="fa-solid fa-briefcase"></i> Caja Chica</span>
                    <i class="fa-solid fa-chevron-down arrow-icon"></i>
                </a>
                <ul class="submenu ${page.includes('cajachica') ? 'open' : ''}" id="sub-cajachica">
                    <li><a href="CajaChica.html#view-operaciones"><i class="fa-regular fa-circle"></i> Operaciones</a></li>
                    <li><a href="CajaChica.html#view-administracion"><i class="fa-regular fa-circle"></i> Administración</a></li>
                    <li><a href="CajaChica.html#view-reportes"><i class="fa-regular fa-circle"></i> Reportes</a></li>
                </ul>
            </li>

            <!-- MÓDULO CAJA (ORDEN ACTUALIZADO) -->
            <li class="menu-item ${isCaja ? 'active open' : ''}" id="menu-caja">
                <a class="menu-link" href="Cajaenter.html#view-formas">
                    <span class="link-content"><i class="fa-solid fa-cash-register"></i> Caja</span>
                    <i class="fa-solid fa-chevron-down arrow-icon"></i>
                </a>
                <ul class="submenu ${isCaja ? 'open' : ''}" id="sub-caja">
                    <li><a href="Cajaenter.html#view-formas"><i class="fa-regular fa-circle"></i> Formas y Resoluciones</a></li>
                    <li><a href="Cajaenter.html#view-documentos"><i class="fa-regular fa-circle"></i> Gestión de Documentos</a></li>
                    <li><a href="Cajaenter.html#view-rubros"><i class="fa-regular fa-circle"></i> Rubros y Combos</a></li>
                    <li><a href="Cajaenter.html#view-tarjetas"><i class="fa-regular fa-circle"></i> Configuración de tarjetas de crédito</a></li>
                    <li><a href="Cajaenter.html#view-moras"><i class="fa-regular fa-circle"></i> Configuración de moras</a></li>
                    <li><a href="Cajaenter.html#view-cheques"><i class="fa-regular fa-circle"></i> Gestión de cheques rechazados</a></li>
                    <li><a href="Cajaenter.html#view-operaciones"><i class="fa-regular fa-circle"></i> Operaciones de Caja</a></li>
                    <li><a href="Cajaenter.html#view-reportes"><i class="fa-regular fa-circle"></i> Reportes de Caja</a></li>
                </ul>
            </li>
        </ul>
    `;
});