/* ============================================================
   PwC PH Managed Services — BD Hub
   Templates Library — Data + Search + Filter Engine
   ============================================================
   
   HOW TO UPDATE:
   1. Add new templates to the TEMPLATE_DATA array below
   2. Each object needs: name, category, fileType, description, link
   3. Valid categories: "PMO", "VRO", "PPE", "Admin"
   4. Valid fileTypes: "Excel", "PowerPoint", "Word", "PDF"
   5. Save the file — the table auto-rebuilds on page load
   ============================================================ */

(function () {
    'use strict';

    // ================================================================
    // ██████  TEMPLATE DATA — EDIT THIS ARRAY TO ADD/UPDATE TEMPLATES
    // ================================================================
    var TEMPLATE_DATA = [

        // ──────────────────────────────────────────────
        // 1. Business Case / Proposal
        // ──────────────────────────────────────────────
        {
            name: "Business Case / Proposal",
            category: "PMO",
            fileType: "Word",
            description: "Structured business case template for building compelling proposals. Includes strategic context, options analysis, cost-benefit assessment, risk summary, and recommendation for stakeholder approval.",
            link: "https://pwcapac.sharepoint.com/:w:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Business%20Case.docx?d=wa8f1ad157e724ccd8f2cadc950d35a76&csf=1&web=1&e=hWP5CR"
        },

        // ──────────────────────────────────────────────
        // 2. Change Request Form
        // ──────────────────────────────────────────────
        {
            name: "Change Request Form",
            category: "PMO",
            fileType: "Word",
            description: "Formal change request document capturing scope change description, impact assessment on cost/schedule/quality, justification, and approval workflow with sign-off fields.",
            link: "https://pwcapac.sharepoint.com/:w:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Change%20Request%20Form.docx?d=w4ac12a33e6644f7c83ad5be440f9c06d&csf=1&web=1&e=vkGrIJ"
        },

        // ──────────────────────────────────────────────
        // 3. Change Request Log
        // ──────────────────────────────────────────────
        {
            name: "Change Request Log",
            category: "PMO",
            fileType: "Excel",
            description: "Centralised log for tracking all change requests across the engagement. Includes request ID, description, requestor, impact, priority, status, approval date, and implementation notes.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Change%20Request%20Log.xlsx?d=w971260a29f724a0382d1813519e0915d&csf=1&web=1&e=ANxcVS"
        },

        // ──────────────────────────────────────────────
        // 4. Communications Plan
        // ──────────────────────────────────────────────
        {
            name: "Communications Plan",
            category: "PMO",
            fileType: "Excel",
            description: "Stakeholder communication planning template defining target audiences, key messages, communication channels, frequency, responsible owners, and feedback mechanisms.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Communications%20Plan.xlsx?d=w0f1b3837cbc84a34bcb8fa46bb9c2bbe&csf=1&web=1&e=qp7Kha"
        },

        // ──────────────────────────────────────────────
        // 5. Lessons Learned
        // ──────────────────────────────────────────────
        {
            name: "Lessons Learned Log",
            category: "PMO",
            fileType: "Excel",
            description: "Structured lessons learned capture template for documenting what went well, what didn't, root causes, impact assessment, and actionable recommendations for future engagements.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Lessons%20Learned%20Log.xlsx?d=wfe08b56c8fa8452b91a471ae44765d97&csf=1&web=1&e=ub1H0V"
        },

        // ──────────────────────────────────────────────
        // 6. Minutes of Meeting
        // ──────────────────────────────────────────────
        {
            name: "Minutes of Meeting",
            category: "PMO",
            fileType: "Excel",
            description: "Standard meeting minutes template capturing attendees, absentees, agenda items discussed, key decisions made, action items with owners and due dates, and next meeting details.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Minutes%20of%20the%20Meeting.xlsx?d=wd4f8becc27104354b909d14541faf559&csf=1&web=1&e=YW17Dm"
        },

        // ──────────────────────────────────────────────
        // 7. Project Completion Checklist
        // ──────────────────────────────────────────────
        {
            name: "Project Completion Checklist",
            category: "PMO",
            fileType: "Excel",
            description: "Comprehensive project close-out and deliverables completion checklist. Tracks all required deliverables, acceptance status, sign-off dates, outstanding items, and handover confirmation.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Completion%20(Deliverables)%20Checklist.xlsx?d=w7c0c4025f2414d92bc500bc3b0ce4ee7&csf=1&web=1&e=FYSElp"
        },

        // ──────────────────────────────────────────────
        // 8. Project Deliverables Acceptance Document
        // ──────────────────────────────────────────────
        {
            name: "Project Deliverables Acceptance Document",
            category: "PMO",
            fileType: "PowerPoint",
            description: "Formal deliverable review and sign-off presentation. Documents deliverable name, acceptance criteria, review findings, stakeholder approvals, and sign-off confirmation for quality assurance.",
            link: "https://pwcapac.sharepoint.com/:p:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Deliverables%20Acceptance%20-%20Review%20and%20Signoff.pptx?d=w061fd62b22f745089023548d663f2b18&csf=1&web=1&e=InBgED"
        },

        // ──────────────────────────────────────────────
        // 9. Project Governance Structure
        // ──────────────────────────────────────────────
        {
            name: "Project Governance Structure",
            category: "PMO",
            fileType: "PowerPoint",
            description: "Programme governance framework presentation defining decision-making bodies, organisational structure, roles and responsibilities, meeting cadences, escalation paths, and approval authorities.",
            link: "https://pwcapac.sharepoint.com/:p:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Governance%20and%20Structure.pptx?d=w58aee561ab8841d7886ba452efd204f1&csf=1&web=1&e=KYdjtV"
        },

        // ──────────────────────────────────────────────
        // 10. Project Handover
        // ──────────────────────────────────────────────
        {
            name: "Project Handover Document",
            category: "PMO",
            fileType: "Word",
            description: "Knowledge transfer and handover document for engagement transitions. Covers project context, key artefacts, outstanding items, lessons learned, contact details, and formal handover sign-off.",
            link: "https://pwcapac.sharepoint.com/:w:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Handover%20Document.docx?d=wbec3a7afebd54a7a8f3fe03d340c0aa5&csf=1&web=1&e=WIJ2HU"
        },

        // ──────────────────────────────────────────────
        // 11. Project Initiation Checklist
        // ──────────────────────────────────────────────
        {
            name: "Project Initiation Checklist",
            category: "PMO",
            fileType: "Excel",
            description: "Pre-engagement and project initiation checklist covering scoping confirmation, team setup, access provisioning, governance design, tooling configuration, and kick-off preparation tasks.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Initiation%20Checklist.xlsx?d=we7778332fc7346b68867592c6eaa34b7&csf=1&web=1&e=Hxj8qR"
        },

        // ──────────────────────────────────────────────
        // 12. Project Kickoff Pack
        // ──────────────────────────────────────────────
        {
            name: "Project Kickoff Pack",
            category: "PMO",
            fileType: "PowerPoint",
            description: "Engagement kick-off presentation template covering project objectives, scope overview, team introductions, governance model, ways of working, communication plan, and immediate next steps.",
            link: "https://pwcapac.sharepoint.com/:p:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Kickoff.pptx?d=wd8a006be9e6d4ce9b5b5ee86df616da6&csf=1&web=1&e=lPcUOy"
        },

        // ──────────────────────────────────────────────
        // 13. Project Progress / Status Report
        // ──────────────────────────────────────────────
        {
            name: "Project Progress / Status Report",
            category: "PMO",
            fileType: "Excel",
            description: "Standard project status report template with overall RAG status, workstream progress, key accomplishments, upcoming milestones, risks and issues summary, decisions needed, and financial overview.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Status%20Report.xlsx?d=wd8325a53dafc4a2da05fab3ffece8b1b&csf=1&web=1&e=zmPw2E"
        },

        // ──────────────────────────────────────────────
        // 14. Project Resource Plan
        // ──────────────────────────────────────────────
        {
            name: "Project Resource Plan",
            category: "PMO",
            fileType: "Excel",
            description: "Resource allocation and capacity planning template with team member names, roles, FTE assignments, start/end dates, utilisation rates, skill mapping, and resource forecast views.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Project%20Resource%20Plan.xlsx?d=wf410db72fcfc48c5a5b4252658b05d75&csf=1&web=1&e=rj8OCm"
        },

        // ──────────────────────────────────────────────
        // 15. Project Roles and Responsibilities
        // ──────────────────────────────────────────────
        {
            name: "Project Roles and Responsibilities",
            category: "PMO",
            fileType: "PowerPoint",
            description: "Programme roles and responsibilities matrix presentation defining each role, key accountabilities, decision rights, reporting lines, and interaction model across workstreams and governance bodies.",
            link: "https://pwcapac.sharepoint.com/:p:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Programme%20Roles%20and%20Responsibilities.pptx?d=wb29744b4872f430da4146d7180d70b3f&csf=1&web=1&e=h5n51V"
        },

        // ──────────────────────────────────────────────
        // 16. RAID Log
        // ──────────────────────────────────────────────
        {
            name: "RAID Log",
            category: "PMO",
            fileType: "Excel",
            description: "Consolidated Risks, Assumptions, Issues, and Dependencies tracker with severity scoring, probability/impact matrix, owners, due dates, mitigation actions, and status tracking across all RAID categories.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20RAID%20Log,%20Risk%20Priority%20Matrix,%20Risk%20Plan.xlsx?d=w041ca0e938d34a6aab86f6c4317c6783&csf=1&web=1&e=D4a4HZ"
        },

        // ──────────────────────────────────────────────
        // 17. Risk Plan
        // ──────────────────────────────────────────────
        {
            name: "Risk Plan",
            category: "PMO",
            fileType: "Excel",
            description: "Detailed risk management plan covering risk identification approach, assessment criteria, response strategies, monitoring procedures, escalation thresholds, and risk review cadence.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20RAID%20Log,%20Risk%20Priority%20Matrix,%20Risk%20Plan.xlsx?d=w041ca0e938d34a6aab86f6c4317c6783&csf=1&web=1&e=D4a4HZ"
        },

        // ──────────────────────────────────────────────
        // 18. Risk Priority Matrix
        // ──────────────────────────────────────────────
        {
            name: "Risk Priority Matrix",
            category: "PMO",
            fileType: "Excel",
            description: "Visual risk priority matrix (heat map) plotting risks by probability and impact. Includes scoring criteria, risk categorisation, and priority-based response guidance for consistent risk assessment.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20RAID%20Log,%20Risk%20Priority%20Matrix,%20Risk%20Plan.xlsx?d=w041ca0e938d34a6aab86f6c4317c6783&csf=1&web=1&e=D4a4HZ"
        },

        // ──────────────────────────────────────────────
        // 19. Stakeholder Map
        // ──────────────────────────────────────────────
        {
            name: "Stakeholder Map",
            category: "PMO",
            fileType: "Excel",
            description: "Stakeholder mapping and analysis template with influence/interest grid, engagement level assessment, communication preferences, relationship owners, and targeted engagement strategies.",
            link: "https://pwcapac.sharepoint.com/:x:/r/teams/PH-INT-CNST-PH-PMO-Team/Shared%20Documents/06%20-%20Reference/b.%20Project%20Management/i.%20Standard%20Operating%20Procedure%20(SOPs)/PMO/PMO%20Standard%20Templates/Template%20-%20Stakeholder%20Mapping.xlsx?d=w6ff0d4b3956141e7af8ee3d29e66db0b&csf=1&web=1&e=kvpj4C"
        }

    ];

    // ================================================================
    // ENGINE — DO NOT EDIT BELOW (unless you're enhancing functionality)
    // ================================================================

    var searchInput = document.getElementById('templateSearch');
    var categoryFilter = document.getElementById('categoryFilter');
    var fileTypeFilter = document.getElementById('fileTypeFilter');
    var tableBody = document.getElementById('templatesBody');
    var resultCount = document.getElementById('resultCount');
    var totalCount = document.getElementById('totalCount');
    var noResults = document.getElementById('noResults');
    var table = document.getElementById('templatesTable');

    if (!tableBody) return;

    // Set total count
    if (totalCount) totalCount.textContent = TEMPLATE_DATA.length;

    // File type icons
    function getFileIcon(fileType) {
        switch (fileType) {
            case 'Excel': return '<i class="fas fa-file-excel" style="color:#217346;"></i>';
            case 'PowerPoint': return '<i class="fas fa-file-powerpoint" style="color:#D04423;"></i>';
            case 'Word': return '<i class="fas fa-file-word" style="color:#2B579A;"></i>';
            case 'PDF': return '<i class="fas fa-file-pdf" style="color:#F40F02;"></i>';
            default: return '<i class="fas fa-file" style="color:#6B6B6B;"></i>';
        }
    }

    // Category badge class
    function getCategoryClass(category) {
        switch (category) {
            case 'PMO': return 'pmo';
            case 'VRO': return 'vro';
            case 'PPE': return 'ppe';
            case 'Admin': return 'admin';
            default: return 'pmo';
        }
    }

    // Render table
    function renderTable() {
        var searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        var catValue = categoryFilter ? categoryFilter.value : 'all';
        var ftValue = fileTypeFilter ? fileTypeFilter.value : 'all';

        var filtered = TEMPLATE_DATA.filter(function (t) {
            var matchSearch = !searchTerm ||
                t.name.toLowerCase().indexOf(searchTerm) !== -1 ||
                t.description.toLowerCase().indexOf(searchTerm) !== -1 ||
                t.category.toLowerCase().indexOf(searchTerm) !== -1;

            var matchCat = catValue === 'all' || t.category === catValue;
            var matchFt = ftValue === 'all' || t.fileType === ftValue;

            return matchSearch && matchCat && matchFt;
        });

        // Clear table
        tableBody.innerHTML = '';

        if (filtered.length === 0) {
            if (table) table.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
        } else {
            if (table) table.style.display = '';
            if (noResults) noResults.style.display = 'none';

            filtered.forEach(function (t, index) {
                var row = document.createElement('tr');
                row.innerHTML =
                    '<td style="color:#6B6B6B; font-size:0.82rem;">' + (index + 1) + '</td>' +
                    '<td><strong>' + t.name + '</strong></td>' +
                    '<td><span class="category-badge ' + getCategoryClass(t.category) + '">' + t.category + '</span></td>' +
                    '<td>' + getFileIcon(t.fileType) + ' <span style="font-size:0.82rem; color:#6B6B6B;">' + t.fileType + '</span></td>' +
                    '<td style="font-size:0.85rem; color:#6B6B6B;">' + t.description + '</td>' +
                    '<td><a href="' + t.link + '" target="_blank" class="template-link" style="color:#D04A02;"><i class="fas fa-external-link-alt"></i> Open</a></td>';
                tableBody.appendChild(row);
            });
        }

        if (resultCount) resultCount.textContent = filtered.length;
    }

    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', renderTable);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', renderTable);
    }
    if (fileTypeFilter) {
        fileTypeFilter.addEventListener('change', renderTable);
    }

    // Initial render
    renderTable();

})();
