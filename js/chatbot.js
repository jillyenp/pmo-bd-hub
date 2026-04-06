/* ============================================================
   PwC PH Managed Services — BD Hub
   Chatbot Engine (Rule-based with keyword matching)
   ============================================================ */

(function () {
    'use strict';

    // ---- KNOWLEDGE BASE ----
    var knowledgeBase = [
        {
            keywords: ['ms-pmo', 'pmo as a service', 'pmo service', 'what is pmo', 'what is ms-pmo'],
            answer: '<strong>PMO (Project Management Office as a Service)</strong> provides end-to-end project governance, planning, RAID management, stakeholder reporting, and delivery assurance for complex transformation programmes.<br><br>Key capabilities: project planning, status reporting, governance & tollgates, resource & budget tracking, stakeholder management, and QA.<br><br>👉 <a href="service-catalogue.html#pmo">View full details in Service Catalogue</a>'
        },
        {
            keywords: ['ms-vro', 'vro as a service', 'vro service', 'what is vro', 'value realisation', 'value realization'],
            answer: '<strong>VRO (Value Realisation Office as a Service)</strong> focuses on benefits tracking, value mapping, business case validation, and outcomes-based reporting. We connect programme delivery to measurable client value through KPI dashboards and stakeholder value narratives.<br><br>👉 <a href="service-catalogue.html#vro">View full details in Service Catalogue</a>'
        },
        {
            keywords: ['ms-admin', 'admin as a service', 'admin service', 'what is admin', 'pmo admin'],
            answer: '<strong>PMO Admin (PMO Administration as a Service)</strong> provides the operational backbone — meeting coordination, document management, onboarding support, engagement logistics, and time & expense tracking.<br><br>👉 <a href="service-catalogue.html#admin">View full details in Service Catalogue</a>'
        },
        {
            keywords: ['pmo guidebook', 'what\'s inside the pmo guidebook', 'guidebook pmo', 'pmo guide'],
            answer: 'The <strong>PMO Guidebook</strong> covers:<br>• Engagement setup & onboarding<br>• Governance frameworks<br>• RAID management processes<br>• Project planning & scheduling<br>• Reporting standards & templates<br>• Resource & budget tracking<br>• Quality assurance protocols<br>• Stakeholder management<br>• Transition & close-out<br><br>👉 <a href="guidebooks.html">Open Guidebooks page</a>'
        },
        {
            keywords: ['admin guidebook', 'pmo admin guidebook', 'admin guide'],
            answer: 'The <strong>PMO Admin Guidebook</strong> covers:<br>• Meeting scheduling & minutes<br>• Document management standards<br>• Onboarding checklists<br>• Engagement logistics<br>• Time & expense protocols<br>• Communication templates<br>• Offboarding procedures<br><br>👉 <a href="guidebooks.html">Open Guidebooks page</a>'
        },
        {
            keywords: ['vro playbook', 'vro guidebook', 'vro guide', 'value playbook'],
            answer: 'The <strong>VRO Guidebook</strong> covers:<br>• Benefits identification & mapping<br>• Value tracking frameworks<br>• Business case templates<br>• KPI definition & monitoring<br>• Benefits reporting standards<br>• Stakeholder value narratives<br>• Post-implementation reviews<br><br>👉 <a href="guidebooks.html">Open Guidebooks page</a>'
        },
        {
            keywords: ['raid', 'raid log', 'risk log', 'risk register', 'issue log', 'risk plan', 'risk matrix', 'risk priority'],
            answer: 'We have 3 RAID-related templates (all in one Excel file):<br>• <strong>RAID Log</strong> — Consolidated Risks, Assumptions, Issues & Dependencies tracker<br>• <strong>Risk Plan</strong> — Risk management approach and response strategies<br>• <strong>Risk Priority Matrix</strong> — Visual heat map for risk scoring<br><br>👉 <a href="templates.html">Open Templates Library</a> and search "RAID" or "Risk"'
        },
        {
            keywords: ['template', 'templates', 'what templates', 'list of templates', 'all templates', 'find template'],
            answer: 'We currently have <strong>19 PMO templates</strong> with live SharePoint links:<br>• Business Case / Proposal<br>• Change Request Form & Log<br>• Communications Plan<br>• Lessons Learned Log<br>• Minutes of Meeting<br>• Project Completion Checklist<br>• Deliverables Acceptance Document<br>• Governance Structure<br>• Project Handover & Initiation Checklist<br>• Kickoff Pack & Status Report<br>• Resource Plan & Roles/Responsibilities<br>• RAID Log, Risk Plan & Risk Matrix<br>• Stakeholder Map<br><br>👉 <a href="templates.html">Browse the full Templates Library</a>'
        },
        {
            keywords: ['status report', 'status template', 'weekly report', 'project status', 'progress report'],
            answer: 'For status reporting, we have:<br>• <strong>Project Progress / Status Report</strong> — Overall RAG, workstream progress, milestones, risks & decisions<br><br>👉 <a href="templates.html">Search "status" in Templates Library</a>'
        },
        {
            keywords: ['contact', 'contacts', 'who are', 'team', 'email', 'reach', 'lead'],
            answer: '<strong>PH PMO Key Contacts:</strong><br>• 👤 <strong>Katherine May Habelito</strong> — Senior Manager, BD Sponsor<br>• 👤 <strong>Jillyen Pagcaliwagan</strong> — Manager, BD Lead<br>• 📧 <strong></strong><br><br>👉 <a href="team.html">View the full team</a><br><br><em>For specific names, please check the internal directory or contact your engagement manager.</em>'
        },
        {
            keywords: ['enable execute evolve', 'approach', 'methodology', 'delivery model', 'three phase', '3 phase'],
            answer: 'Our <strong>Enable — Execute — Evolve</strong> delivery model:<br><br><strong>01 Enable:</strong> Rapid onboarding, governance setup, tooling configuration<br><strong>02 Execute:</strong> Disciplined delivery — reporting, RAID, dashboards, QA<br><strong>03 Evolve:</strong> Retrospectives, process optimisation, capability uplift<br><br>👉 <a href="index.html#eee">Learn more on Home page</a>'
        },
        {
            keywords: ['savings', 'cost', 'benefit', 'value proposition', 'why managed services'],
            answer: 'PwC Managed Services delivers <strong>significant cost savings</strong> compared to onshore delivery, while maintaining PwC quality standards.<br><br>Key value drivers:<br>• Scalable, on-demand resourcing<br>• Standardised, repeatable delivery<br>• Ready-to-deploy templates<br>• Proven governance frameworks<br>• Continuous improvement culture<br><br>👉 <a href="service-catalogue.html">View full Service Catalogue</a>'
        },
        {
            keywords: ['bd', 'business development', 'pitch', 'elevator', 'position', 'sell'],
            answer: 'For BD conversations, visit our <strong>BD Tools page</strong> which includes:<br>• Elevator pitch examples<br>• Capability statements<br>• BD FAQ<br>• Positioning guides for PMO/VRO<br>• Links to key collateral<br><br>👉 <a href="bd-tools.html">Open BD Tools</a>'
        },
        {
            keywords: ['service catalogue', 'fy26', 'catalogue', 'catalog', 'offerings'],
            answer: 'The <strong>FY26 Service Catalogue</strong> outlines our three core offerings:<br>• PMO as a Service<br>• VRO as a Service<br>• PMO Admin as a Service<br><br>It includes engagement lifecycle, case studies, and capability overviews.<br><br>👉 <a href="service-catalogue.html">View Service Catalogue</a>'
        },
        {
            keywords: ['onboarding', 'new joiner', 'getting started', 'start'],
            answer: 'Welcome! For onboarding, start with:<br>1️⃣ <a href="guidebooks.html">Read the relevant Guidebook</a> (PMO, VRO, or Admin)<br>2️⃣ <a href="templates.html">Browse available Templates</a><br>3️⃣ <a href="service-catalogue.html">Review the Service Catalogue</a><br>4️⃣ <a href="bd-tools.html">Check BD Tools</a> for positioning<br><br>Your engagement manager will provide specific assignment details.'
        },
        {
            keywords: ['business case', 'proposal template'],
            answer: 'We have a <strong>Business Case / Proposal</strong> template available:<br>• Structured format for compelling proposals<br>• Includes strategic context, options analysis, cost-benefit assessment<br><br>👉 <a href="templates.html">Search "Business Case" in Templates Library</a>'
        },
        {
            keywords: ['change request', 'change management', 'scope change'],
            answer: 'We have 2 change management templates:<br>• <strong>Change Request Form</strong> — Formal CR document with impact assessment<br>• <strong>Change Request Log</strong> — Centralised CR tracking across the engagement<br><br>👉 <a href="templates.html">Search "Change Request" in Templates Library</a>'
        },
        {
            keywords: ['kickoff', 'kick off', 'kick-off', 'project start'],
            answer: 'For project kick-offs, we have:<br>• <strong>Project Kickoff Pack</strong> — Presentation with objectives, scope, governance, ways of working<br>• <strong>Project Initiation Checklist</strong> — Pre-engagement setup tasks<br><br>👉 <a href="templates.html">Search "Kickoff" in Templates Library</a>'
        },
        {
            keywords: ['governance', 'steerco', 'steering committee', 'tollgate'],
            answer: 'For governance, we have:<br>• <strong>Project Governance Structure</strong> — Decision-making bodies, escalation paths, meeting cadences<br>• <strong>Project Roles and Responsibilities</strong> — Accountability matrix<br><br>👉 <a href="templates.html">Search "Governance" in Templates Library</a>'
        },
        {
            keywords: ['handover', 'transition', 'close out', 'closeout', 'completion'],
            answer: 'For project close-out, we have:<br>• <strong>Project Handover Document</strong> — Knowledge transfer and formal sign-off<br>• <strong>Project Completion Checklist</strong> — Deliverables completion tracking<br>• <strong>Lessons Learned Log</strong> — Capture what went well and improvements<br><br>👉 <a href="templates.html">Search "Handover" in Templates Library</a>'
        },
        {
            keywords: ['meeting', 'minutes', 'mom', 'meeting minutes'],
            answer: 'For meetings, we have:<br>• <strong>Minutes of Meeting</strong> — Attendees, discussions, decisions, action items<br>• <strong>Communications Plan</strong> — Stakeholder communication scheduling<br><br>👉 <a href="templates.html">Search "Minutes" in Templates Library</a>'
        },
        {
            keywords: ['resource', 'resource plan', 'staffing', 'capacity'],
            answer: 'For resource management, we have:<br>• <strong>Project Resource Plan</strong> — Team roles, FTE allocations, utilisation, and forecasts<br><br>👉 <a href="templates.html">Search "Resource" in Templates Library</a>'
        },
        {
            keywords: ['stakeholder', 'stakeholder map', 'stakeholder management'],
            answer: 'For stakeholder management, we have:<br>• <strong>Stakeholder Map</strong> — Influence/interest grid, engagement strategies, and relationship owners<br>• <strong>Communications Plan</strong> — Audience, messages, channels, and frequency<br><br>👉 <a href="templates.html">Search "Stakeholder" in Templates Library</a>'
        },
        {
            keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
            answer: '👋 Hello! Welcome to the PMO Hub Assistant. I can help you with:<br>• Finding templates<br>• Service information<br>• Guidebook contents<br>• BD tools and pitches<br>• Key contacts<br><br>What would you like to know?'
        },
        {
            keywords: ['thank', 'thanks', 'cheers'],
            answer: 'You\'re welcome! 😊 Feel free to ask anytime. I\'m here to help you navigate the BD Hub.'
        },
        {
            keywords: ['help', 'what can you do', 'how to use'],
            answer: 'I can help you with:<br>• 🔍 <strong>Finding templates</strong> — "Where is the RAID log?"<br>• 📖 <strong>Guidebook info</strong> — "What\'s in the PMO Guidebook?"<br>• 💼 <strong>Service details</strong> — "What is PMO?"<br>• 📊 <strong>BD support</strong> — "How to position PMO?"<br>• 👥 <strong>Contacts</strong> — "Who are the PH MS contacts?"<br><br>Just type your question!'
        }
    ];

    // ---- GET ELEMENTS ----
    var fab = document.getElementById('chatbotFab');
    var chatWindow = document.getElementById('chatbotWindow');
    var closeBtn = document.getElementById('chatbotClose');
    var messagesEl = document.getElementById('chatbotMessages');
    var inputEl = document.getElementById('chatbotInput');
    var sendBtn = document.getElementById('chatbotSend');
    var suggestionsEl = document.getElementById('chatbotSuggestions');

    // ---- SAFETY CHECK: Exit if elements missing ----
    if (!fab) {
        console.error('Chatbot ERROR: #chatbotFab button not found in HTML');
        return;
    }
    if (!chatWindow) {
        console.error('Chatbot ERROR: #chatbotWindow not found in HTML');
        return;
    }
    if (!closeBtn) {
        console.error('Chatbot ERROR: #chatbotClose not found in HTML');
        return;
    }
    if (!messagesEl) {
        console.error('Chatbot ERROR: #chatbotMessages not found in HTML');
        return;
    }
    if (!inputEl) {
        console.error('Chatbot ERROR: #chatbotInput not found in HTML');
        return;
    }
    if (!sendBtn) {
        console.error('Chatbot ERROR: #chatbotSend not found in HTML');
        return;
    }

    console.log('✅ Chatbot loaded successfully!');

    // ---- TOGGLE CHATBOT ----
    fab.addEventListener('click', function () {
        var isOpen = chatWindow.classList.contains('open');
        if (isOpen) {
            chatWindow.classList.remove('open');
            fab.innerHTML = '<i class="fas fa-comment-dots"></i>';
        } else {
            chatWindow.classList.add('open');
            fab.innerHTML = '<i class="fas fa-times"></i>';
            inputEl.focus();
        }
    });

    closeBtn.addEventListener('click', function () {
        chatWindow.classList.remove('open');
        fab.innerHTML = '<i class="fas fa-comment-dots"></i>';
    });

    // ---- SEND MESSAGE ----
    function sendMessage() {
        var text = inputEl.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        inputEl.value = '';

        if (suggestionsEl) {
            suggestionsEl.style.display = 'none';
        }

        setTimeout(function () {
            var response = getResponse(text);
            addMessage(response, 'bot');
        }, 500);
    }

    sendBtn.addEventListener('click', function () {
        sendMessage();
    });

    inputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    // ---- SUGGESTION CHIPS ----
    if (suggestionsEl) {
        var chips = suggestionsEl.querySelectorAll('.suggestion-chip');
        for (var i = 0; i < chips.length; i++) {
            chips[i].addEventListener('click', function () {
                var query = this.getAttribute('data-query');
                inputEl.value = query;
                sendMessage();
            });
        }
    }

    // ---- ADD MESSAGE TO CHAT ----
    function addMessage(content, sender) {
        var msg = document.createElement('div');
        msg.className = 'chat-msg ' + sender;
        msg.innerHTML = content;
        messagesEl.appendChild(msg);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // ---- KEYWORD MATCHING ENGINE ----
    function getResponse(input) {
        var lowerInput = input.toLowerCase().replace(/[?!.,;:'"]/g, '');

        var bestMatch = null;
        var bestScore = 0;

        for (var i = 0; i < knowledgeBase.length; i++) {
            var entry = knowledgeBase[i];
            var score = 0;

            for (var j = 0; j < entry.keywords.length; j++) {
                var keyword = entry.keywords[j].toLowerCase();

                if (lowerInput.indexOf(keyword) !== -1) {
                    score += keyword.split(' ').length * 3;
                } else {
                    var words = keyword.split(' ');
                    for (var k = 0; k < words.length; k++) {
                        if (words[k].length > 2 && lowerInput.indexOf(words[k]) !== -1) {
                            score += 1;
                        }
                    }
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = entry;
            }
        }

        if (bestMatch && bestScore >= 1) {
            return bestMatch.answer;
        }

        return 'I\'m not sure about that, but here are some things I can help with:<br><br>' +
            '• <a href="templates.html">Search templates</a><br>' +
            '• <a href="guidebooks.html">View guidebooks</a><br>' +
            '• <a href="service-catalogue.html">Service catalogue</a><br>' +
            '• <a href="bd-tools.html">BD tools</a><br><br>' +
            'Try asking about a specific template, service, or guidebook!';
    }

})();
