let selectedAttack = null;

function showContent(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showAttackContent(attack) {
    selectedAttack = attack;
    showContent(attack);
    resetRoleContents();
}

function showContent(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}



function showRoleContent(role) {
    if (selectedAttack) {
        const content = getRoleContent(role, selectedAttack);
        document.getElementById(`${role}-content`).innerHTML = content;
        showContent(role);
    } else {
        alert('Please select an attack type first.');
    }
}

function resetRoleContents() {
    document.getElementById('executive-content').innerHTML = 'Select an attack type first to view role-based content.';
    document.getElementById('manager-content').innerHTML = 'Select an attack type first to view role-based content.';
    document.getElementById('employee-content').innerHTML = 'Select an attack type first to view role-based content.';
}

function getRoleContent(role, attack) {
    const roleContents = {
        phishing: {
            executive: '<h2>Phishing Attack: Executive</h2><p>Evaluate the scope of the attack, activate the incident response team, and coordinate with legal and regulatory authorities.</p>',
            manager: '<h2>Phishing Attack: Manager</h2><p>Report to IT, contain the breach, assist affected team members, and communicate with your team.</p>',
            employee: '<h2>Phishing Attack: Employee</h2><p>Report the incident, disconnect from the network, change passwords, and run security scans.</p>'
        },
        ransomware: {
            executive: '<h2>Ransomware Attack: Executive</h2><p>Evaluate the extent of the attack, activate the incident response team, and coordinate with legal and regulatory authorities.</p>',
            manager: '<h2>Ransomware Attack: Manager</h2><p>Report to IT, contain the breach, assist affected team members, and communicate with your team.</p>',
            employee: '<h2>Ransomware Attack: Employee</h2><p>Report the incident, disconnect from the network, change passwords, and run security scans.</p>'
        },
        apts: {
            executive: '<h2>Advanced Persistent Threats (APTs): Executive</h2><p>Assess the impact, notify stakeholders, activate the incident response team, and ensure compliance with reporting requirements.</p>',
            manager: '<h2>Advanced Persistent Threats (APTs): Manager</h2><p>Report the incident to IT, support the investigation, and maintain communication with your team.</p>',
            employee: '<h2>Advanced Persistent Threats (APTs): Employee</h2><p>Report any suspicious activity, follow security protocols, and cooperate with IT during the investigation.</p>'
        },
        dos: {
            executive: '<h2>DoS/DDoS Attack: Executive</h2><p>Evaluate the business impact, engage the incident response team, and coordinate with service providers.</p>',
            manager: '<h2>DoS/DDoS Attack: Manager</h2><p>Report the attack to IT, assist in mitigating the impact, and keep your team informed.</p>',
            employee: '<h2>DoS/DDoS Attack: Employee</h2><p>Report any service disruptions, follow instructions from IT, and avoid making unnecessary changes to the system.</p>'
        },
        insider: {
            executive: '<h2>Insider Threat: Executive</h2><p>Conduct a thorough investigation, engage HR and legal teams, and ensure proper communication with stakeholders.</p>',
            manager: '<h2>Insider Threat: Manager</h2><p>Monitor for suspicious behavior, report incidents to IT, and support the investigation.</p>',
            employee: '<h2>Insider Threat: Employee</h2><p>Report any unusual activities, follow security policies, and cooperate with the investigation.</p>'
        },
        'sql-injection': {
            executive: '<h2>SQL Injection: Executive</h2><p>Evaluate the potential data breach, activate the incident response team, and coordinate with regulatory authorities.</p>',
            manager: '<h2>SQL Injection: Manager</h2><p>Report the incident to IT, support the investigation, and ensure team compliance with security measures.</p>',
            employee: '<h2>SQL Injection: Employee</h2><p>Report any anomalies, follow security protocols, and avoid using vulnerable input fields.</p>'
        },
        malware: {
            executive: '<h2>Malware Infections: Executive</h2><p>Assess the impact on business operations, engage the incident response team, and coordinate with cybersecurity experts.</p>',
            manager: '<h2>Malware Infections: Manager</h2><p>Report the infection to IT, assist in containment, and communicate with your team.</p>',
            employee: '<h2>Malware Infections: Employee</h2><p>Report any suspicious activity, disconnect from the network, and run security scans.</p>'
        },
        'social-engineering': {
            executive: '<h2>Social Engineering: Executive</h2><p>Evaluate the incident, engage the incident response team, and ensure proper communication with stakeholders.</p>',
            manager: '<h2>Social Engineering: Manager</h2><p>Report the incident to IT, support affected employees, and reinforce training.</p>',
            employee: '<h2>Social Engineering: Employee</h2><p>Report any suspicious requests, verify identities, and follow security protocols.</p>'
        },
        'zero-day': {
            executive: '<h2>Zero-Day Exploits: Executive</h2><p>Assess the potential impact, engage the incident response team, and ensure compliance with reporting requirements.</p>',
            manager: '<h2>Zero-Day Exploits: Manager</h2><p>Report the exploit to IT, support the investigation, and maintain communication with your team.</p>',
            employee: '<h2>Zero-Day Exploits: Employee</h2><p>Report any unusual activity, follow security protocols, and cooperate with IT during the investigation.</p>'
        },
        'data-breach': {
            executive: '<h2>Data Breaches: Executive</h2><p>Conduct a thorough investigation, notify stakeholders, engage the incident response team, and coordinate with regulatory authorities.</p>',
            manager: '<h2>Data Breaches: Manager</h2><p>Report the breach to IT, support the investigation, and ensure team compliance with security measures.</p>',
            employee: '<h2>Data Breaches: Employee</h2><p>Report any anomalies, follow security protocols, and avoid unauthorized data access.</p>'
        }
    };

    return roleContents[attack] ? roleContents[attack][role] : 'Content not available for the selected attack type and role.';
}

function showContentOnBtn()
{
    const r = document.getElementById('role').value
    const w = document.getElementById('wtd').value

    if(r == 'executive' && w == 'phishing')
        {
            document.getElementById('action').style.display = 'block';
                document.getElementById('home').style.display = 'none';
                document.getElementById('fl-statutes').style.display = 'none';
                
                document.getElementById('content-main').style.display = 'block';
                document.getElementById('content-main').innerHTML = `
 <h2>Phishing Attack Response</h2>
<p>In the event of a successful phishing attack, the response steps should be clearly defined for each role to ensure a swift and effective reaction. Below are the specific steps that people in the roles of executive team, people managers, and employees should take after a phishing attack has occurred:</p>
<div class="section">
<h2>Executive Team</h2>
<h3>Steps to Take After a Phishing Attack:</h3>
<ol>
<li>
<strong>Assess the Impact:</strong>
<ul>
<li>Evaluate the scope of the attack, including what information was compromised and how it affects the organization.</li>
</ul>
</li>
<li>
<strong>Activate Incident Response Plan:</strong>
<ul>
<li>Ensure the incident response team is fully engaged and leading the mitigation efforts.</li>
</ul>
</li>
<li>
<strong>Coordinate with Legal and Regulatory Authorities:</strong>
<ul>
<li>Report the breach to relevant authorities as required by <a href="https://www.flsenate.gov/Laws/Statutes/2024/282.3185">Florida’s Local Government Cybersecurity Act (F.S. 282.3185).</a></li>
<li>Engage legal counsel to manage potential liabilities and compliance issues.</li>
</ul>
</li>
<li>
<strong>Internal Communication:</strong>
<ul>
<li>Inform key stakeholders, including board members and department heads, about the breach and the steps being taken.</li>
</ul>
</li>
<li>
<strong>External Communication:</strong>
<ul>
<li>Prepare a public statement if necessary to address the breach, ensuring transparency and maintaining public trust.</li>
</ul>
</li>
<li>
<strong>Review and Improve Security Measures:</strong>
<ul>
<li>Conduct a post-incident analysis to identify weaknesses and implement stronger security measures to prevent future attacks.</li>
</ul>
</li>
<li>
<strong>Support for Affected Parties:</strong>
<ul>
<li>Provide support and guidance to employees affected by the breach, including credit monitoring if personal information was compromised.</li>
</ul>
</li>
</ol>
<img src="https://github.com/senjapuri/HandBook-Website-Test/blob/main/e_phishing.png?raw=true" alt="Mobile Security" width="" height="500" style="display: block; margin: 0 auto;" />
</div>
</div>

`;
                document.getElementById('ref').innerHTML = `
 <li><a href="https://www.cisa.gov/phishing" target="_blank">CISA - Phishing</a></li>
        <li><a href="https://www.consumer.ftc.gov/articles/how-spot-avoid-phishing-scams" target="_blank">Federal Trade Commission - How to Spot and Avoid Phishing Scams</a></li>
        <li><a href="https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" target="_blank">NIST - Phishing and Social Engineering</a></li>
    
`;
document.getElementById('action').innerHTML = `
 <h3>Action Area</h3>
               
                <ul>
                    <li>Verify the Source</li>
                    <li>Report the Incident</li>
                     <li>Change Passwords</li>
                      <li>Conduct a Security Review</li>
                </ul>
`;
        }
        else if(r == 'blank' && w == 'phishing')
            {
                document.getElementById('action').style.display = 'block';
                document.getElementById('home').style.display = 'none';
                document.getElementById('content-main').style.display = 'block';
                document.getElementById('fl-statutes').style.display = 'none';
                document.getElementById('content-main').innerHTML = `
 <h1>Phishing</h1>

<h2>How Phishing Works</h2>
<p>You get an email that looks like it’s from someone you know. It seems to be from one of your company’s vendors and asks that you click on a link to update your business account. Should you click? Maybe it looks like it’s from your boss and asks for your network password. Should you reply? In either case, probably not. These may be phishing attempts.</p>
<img src="https://www.securitymentor.com/assets/site/phishing-illustration-fish-hook-over-computer.png" alt="Mobile Security" width="" height="300" style="display: block; margin: 0 auto;" />
<h2>What You Can Do</h2>
<p>Before you click on a link or share any of your sensitive business information:</p>
<ul>
<li><strong>Check it out:</strong> Look up the website or phone number for the company or person behind the text or email. Make sure that you’re getting the real company and not about to download malware or talk to a scammer.</li>
<li><strong>Talk to someone:</strong> Talking to a colleague might help you figure out if the request is real or a phishing attempt.</li>
<li><strong>Make a call if you’re not sure:</strong> Pick up the phone and call that vendor, colleague, or client who sent the email. Confirm that they really need information from you. Use a number you know to be correct, not the number in the email or text.</li>
</ul>
<h2>How to Protect Your Business</h2>
<p>Take these steps to protect your business from phishing attacks:</p>
<ul>
<li><strong>Back up your data:</strong> Regularly back up your data and make sure those backups are not connected to the network. That way, if a phishing attack happens and hackers get to your network, you can restore your data. Make data backup part of your routine business operations.</li>
<li><strong>Keep your security up to date:</strong> Always install the latest patches and updates. Look for additional means of protection, like email authentication and intrusion prevention software, and set them to update automatically on your computers. On mobile devices, you may have to do it manually.</li>
<li><strong>Alert your staff:</strong> Share with them this information. Keep in mind that phishing scammers change their tactics often, so make sure you include tips for spotting the latest phishing schemes in your regular training.</li>
<li><strong>Deploy a safety net:</strong> Use email authentication technology to help prevent phishing emails from reaching your company’s inboxes in the first place.</li>
</ul>
<h2>What if You Fall for a Phishing Scheme</h2>
<p>If you fall victim to a phishing attack, here’s what to do:</p>
<ul>
<li><strong>Alert others:</strong> Talk to your colleagues and share your experience. Phishing attacks often happen to more than one person in a company.</li>
<li><strong>Limit the damage:</strong> Immediately change any compromised passwords and disconnect from the network any computer or device that’s infected with malware.</li>
<li><strong>Follow your company’s procedures:</strong> These may include notifying specific people in your organization or contractors that help you with IT.</li>
<li><strong>Notify customers:</strong> If your data or personal information was compromised, make sure you notify the affected parties — they could be at risk of identity theft. Find information on how to do that at <a href="https://www.ftc.gov/DataBreach" target="_blank">Data Breach Response: A Guide for Business</a>.</li>
<li><strong>Report it:</strong> Forward phishing emails to <a href="mailto:spam@uce.gov">spam@uce.gov</a> and to <a href="mailto:reportphishing@apwg.org">reportphishing@apwg.org</a>. Let the company or person that was impersonated know about the phishing scheme. And report it to the FTC at <a href="https://www.ftc.gov/Complaint" target="_blank">FTC.gov/Complaint</a>.</li>
</ul>
<br>
<p style="color:red;">* To know more on this topic according to your role, Please select your Role from left pane.</p>

`;
                document.getElementById('ref').innerHTML = `
 <li><a href="https://www.cisa.gov/phishing" target="_blank">CISA - Phishing</a></li>
        <li><a href="https://www.consumer.ftc.gov/articles/how-spot-avoid-phishing-scams" target="_blank">Federal Trade Commission - How to Spot and Avoid Phishing Scams</a></li>
        <li><a href="https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" target="_blank">NIST - Phishing and Social Engineering</a></li>
    
`;
document.getElementById('action').innerHTML = `
 <h3>Action Area</h3>
               
                <ul>
                    <li>Verify the Source</li>
                    <li>Report the Incident</li>
                     <li>Change Passwords</li>
                      <li>Conduct a Security Review</li>
                </ul>
`;
            }
        else if(r == 'blank' && w == 'ransomware')
        {
            document.getElementById('action').style.display = 'block';
                document.getElementById('home').style.display = 'none';
                document.getElementById('content-main').style.display = 'block';
                document.getElementById('fl-statutes').style.display = 'none';
                document.getElementById('content-main').innerHTML = `
 <h1>Ransomware</h1>
<p>Someone in your company gets an email. It looks legitimate — but with one click on a link, or one download of an attachment, everyone is locked out of your network. That link downloaded software that holds your data hostage. That’s a ransomware attack.</p>
<p>The attackers ask for money or cryptocurrency, but even if you pay, you don’t know if the cybercriminals will keep your data or destroy your files. Meanwhile, the information you need to run your business and sensitive details about your customers, employees, and company are now in criminal hands. Ransomware can take a serious toll on your business.</p>
<div class="section">
<h2>How It Happens</h2>
<p>Criminals can start a ransomware attack in a variety of ways:</p>
<ul>
<li><strong>Scam emails:</strong> with links and attachments that put your data and network at risk. These phishing emails make up most ransomware attacks.</li>
<li><strong>Server vulnerabilities:</strong> which can be exploited by hackers.</li>
<li><strong>Infected websites:</strong> that automatically download malicious software onto your computer.</li>
<li><strong>Online ads:</strong> that contain malicious code — even on websites you know and trust.</li>
</ul>
</div>
<div class="section">
<h2>How to Protect Your Business</h2>
<ul>
<li><strong>Have a plan:</strong> How would your business stay up and running after a ransomware attack? Put this plan in writing and share it with everyone who needs to know.</li>
<li><strong>Back up your data:</strong> Regularly save important files to a drive or server that’s not connected to your network. Make data backup part of your routine business operations.</li>
<li><strong>Keep your security up to date:</strong> Always install the latest patches and updates. Look for additional means of protection, like email authentication, and intrusion prevention software, and set them to update automatically on your computer. On mobile devices, you may have to do it manually.</li>
<li><strong>Alert your staff:</strong> Teach them how to avoid phishing scams and show them some of the common ways computers and devices become infected. Include tips for spotting and protecting against ransomware in your regular orientation and training.</li>
</ul>
</div>
<div class="section">
<h2>What to Do If You're Attacked</h2>
<ul>
<li><strong>Limit the damage:</strong> Immediately disconnect the infected computers or devices from your network. If your data has been stolen, take steps to protect your company and notify those who might be affected.</li>
<li><strong>Contact the authorities:</strong> Report the attack right away to your local FBI office.</li>
<li><strong>Keep your business running:</strong> Now’s the time to implement that plan. Having data backed up will help.</li>
<li><strong>Should I pay the ransom?</strong> Law enforcement doesn’t recommend that, but it’s up to you to determine whether the risks and costs of paying are worth the possibility of getting your files back. However, paying the ransom may not guarantee you get your data back.</li>
<li><strong>Notify customers:</strong> If your data or personal information was compromised, make sure you notify the affected parties ― they could be at risk of identity theft. Find information on how to do that at <a href="https://www.ftc.gov/DataBreach" target="_blank">Data Breach Response: A Guide for Business</a>.</li>
</ul>
</div>
</div>
<br>
<p style="color:red;">* To know more on this topic according to your role, Please select your Role from left pane.</p>

`;
                document.getElementById('ref').innerHTML = `
<li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
<li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
<li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
    
`;
document.getElementById('action').innerHTML = `
 <h3>Action Area</h3>
               
                <ul>
                    <li>Contain the Breach</li>
                    <li>Report and Communicate</li>
                     <li>Facilitate Forensic Analysis</li>
                      <li>Reinforce Security Measures</li>
                </ul>
`;
        }
        else if(r == 'blank' && w == 'apts')
            {
                document.getElementById('action').style.display = 'block';
                    document.getElementById('home').style.display = 'none';
                    document.getElementById('content-main').style.display = 'block';
                    document.getElementById('fl-statutes').style.display = 'none';
                    document.getElementById('content-main').innerHTML = `
                    <h1>Advanced Persistent Threats (APTs)</h1>
    
                    <h2>How APTs Work</h2>
                    <p>Advanced Persistent Threats (APTs) refer to prolonged and targeted cyber attacks in which an intruder gains access to a network and remains undetected for an extended period. Unlike other forms of cyber attacks, which often involve short-term exploitation, APTs are characterized by their stealth and persistence. Attackers typically aim to steal data, spy on activities, or disrupt operations, targeting high-value assets such as intellectual property, government secrets, or personal information.</p>
                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/apt.png?raw=true" alt="Advanced Persistent Threats Illustration" width="" height="300" style="display: block; margin: 0 auto;" />
                    
                    <h2>Recognizing APTs</h2>
                    <p>APTs often employ sophisticated techniques that blend in with regular network traffic, making them difficult to detect. Some signs that your organization might be under an APT attack include:</p>
                    <ul>
                      <li><strong>Unusual network activity:</strong> Monitoring tools may show unexpected data flows or communication with unfamiliar IP addresses.</li>
                      <li><strong>Repeated phishing attempts:</strong> Attackers may use targeted phishing emails to gain access to privileged accounts.</li>
                      <li><strong>Slow or unstable systems:</strong> Systems may begin to slow down or crash unexpectedly due to the covert operations of the APT.</li>
                      <li><strong>Unauthorized access:</strong> Logs may reveal unauthorized access to sensitive areas of the network, often during off-hours.</li>
                    </ul>
                    
                    <h2>What You Can Do</h2>
                    <p>To defend against APTs, your organization should adopt a multi-layered security strategy:</p>
                    <ul>
                      <li><strong>Regular system audits:</strong> Conduct frequent audits of your systems and networks to identify and address vulnerabilities before they can be exploited.</li>
                      <li><strong>Advanced threat detection tools:</strong> Implement and regularly update advanced threat detection and response tools that can identify suspicious patterns indicative of APT activity.</li>
                      <li><strong>Educate employees:</strong> Ensure that all staff are trained to recognize and report suspicious emails, links, and attachments.</li>
                      <li><strong>Limit access:</strong> Use the principle of least privilege to restrict access to sensitive data and systems to only those who need it for their roles.</li>
                    </ul>
                    
                    <h2>How to Protect Your Business</h2>
                    <p>Preventing APTs requires a combination of proactive and reactive security measures:</p>
                    <ul>
                      <li><strong>Deploy endpoint detection and response (EDR):</strong> Use EDR tools to monitor, detect, and respond to potential threats on all endpoints, such as computers, mobile devices, and servers.</li>
                      <li><strong>Utilize network segmentation:</strong> Segregate critical systems and sensitive data from the rest of the network to limit the damage of an APT if they gain access.</li>
                      <li><strong>Regularly update security protocols:</strong> Stay current with the latest security patches and updates for all software and hardware to close vulnerabilities.</li>
                      <li><strong>Incident response plan:</strong> Develop and regularly update an incident response plan that outlines specific steps to take if an APT is detected.</li>
                    </ul>
                    
                    <h2>What if You Detect an APT?</h2>
                    <p>If you suspect that your organization is under an APT attack, take the following steps:</p>
                    <ul>
                      <li><strong>Isolate the threat:</strong> Immediately disconnect compromised systems from the network to prevent further access and data exfiltration.</li>
                      <li><strong>Engage with experts:</strong> Contact cybersecurity experts or a third-party security firm with experience in handling APTs for a comprehensive threat assessment.</li>
                      <li><strong>Forensic investigation:</strong> Conduct a thorough investigation to determine the extent of the intrusion, the data accessed, and the entry point used by the attackers.</li>
                      <li><strong>Notify affected parties:</strong> Inform stakeholders, including employees, customers, and possibly regulatory bodies, about the breach and the steps being taken to mitigate it.</li>
                      <li><strong>Strengthen defenses:</strong> Post-incident, review and reinforce your security measures to prevent future APTs, including updating firewalls, intrusion detection systems, and employee training.</li>
                    </ul>
                    
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Rqbl65cJMuA" title="Advanced Persistent Threats Awareness Video" frameborder="0" allowfullscreen></iframe>
                    
                    <br>
                    <p style="color:red;">* To learn more about protecting your organization from Advanced Persistent Threats based on your specific role, please select your role from the left pane.</p>
    
    `;
                    document.getElementById('ref').innerHTML = `
    <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
    <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
    <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
        
    `;
    document.getElementById('action').innerHTML = `
     <h3>Action Area</h3>
                   
                    <ul>
                        <li>Contain the Breach</li>
                        <li>Report and Communicate</li>
                         <li>Facilitate Forensic Analysis</li>
                          <li>Reinforce Security Measures</li>
                    </ul>
    `;
            }
        else if(r == 'manager' && w == 'ransomware')
            {
                document.getElementById('action').style.display = 'block';
                    document.getElementById('home').style.display = 'none';
                    document.getElementById('content-main').style.display = 'block';
                    document.getElementById('fl-statutes').style.display = 'none';
                    document.getElementById('content-main').innerHTML = `
     <h1>Ransomware Attack Response</h1>
<p>In the event of a ransomware attack, the response steps should be clearly defined for each role to ensure a swift and effective reaction. Below are the specific steps that people in the roles of the managers should take after a ransomware attack has occurred:</p>
<h2>Steps to Take After a Ransomware Attack:</h2>
<ol>
<li>
<strong>Report to IT and Upper Management:</strong>
<ul>
<li>Immediately inform the IT department and your direct superior about the incident.</li>
</ul>
</li>
<li>
<strong>Contain the Breach:</strong>
<ul>
<li>Work with the IT department to isolate compromised systems to prevent further damage.</li>
</ul>
</li>
<li>
<strong>Identify and Assist Affected Team Members:</strong>
<ul>
<li>Determine which team members were affected and provide them with specific instructions to secure their accounts and data.</li>
</ul>
</li>
<li>
<strong>Communicate with Your Team:</strong>
<ul>
<li>Clearly communicate the situation to your team and provide guidance on next steps.</li>
</ul>
</li>
<li>
<strong>Facilitate Forensic Analysis:</strong>
<ul>
<li>Assist the IT and security teams with collecting information and evidence for forensic analysis.</li>
</ul>
</li>
<li>
<strong>Reinforce Security Protocols:</strong>
<ul>
<li>Conduct an immediate refresher training session to reinforce cybersecurity best practices and prevent future incidents.</li>
</ul>
</li>
<li>
<strong>Monitor for Further Threats:</strong>
<ul>
<li>Keep an eye on team activities and communications for signs of additional ransomware attempts or other suspicious behavior.</li>
</ul>
</li>
</ol>
<img src="https://github.com/senjapuri/HandBook-Website-Test/blob/main/m_ransom.png?raw=true" alt="Mobile Security" width="" height="500" style="display: block; margin: 0 auto;" />
    
    `;
                    document.getElementById('ref').innerHTML = `
    <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
    <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
    <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
        
    `;
    document.getElementById('action').innerHTML = `
     <h3>Action Area</h3>
                   
                    <ul>
                        <li>Contain the Breach</li>
                        <li>Report and Communicate</li>
                         <li>Facilitate Forensic Analysis</li>
                          <li>Reinforce Security Measures</li>
                    </ul>
    `;
            }

            else if(r == 'employee' && w == 'data-breach')
                {
                    
                document.getElementById('action').style.display = 'block';
                document.getElementById('home').style.display = 'none';
                document.getElementById('content-main').style.display = 'block';
                document.getElementById('fl-statutes').style.display = 'none';
                document.getElementById('content-main').innerHTML = `
 <h2>Employees: Data Breach Response</h2>
<p>If you suspect you have been involved in a data breach, follow these steps immediately:</p>
<div class="section">
<h3>Steps to Take After a Data Breach:</h3>
<ol>
<li>
<strong>Report the Incident:</strong>
<ul>
<li>Immediately report the data breach to the IT department and follow their instructions.</li>
</ul>
</li>
<li>
<strong>Disconnect from Network:</strong>
<ul>
<li>Disconnect the compromised device from the network to prevent further spread of the breach.</li>
</ul>
</li>
<li>
<strong>Change Passwords:</strong>
<ul>
<li>Change passwords for all accounts, especially those accessed through the compromised device.</li>
</ul>
</li>
<li>
<strong>Run Security Scans:</strong>
<ul>
<li>Use antivirus and anti-malware software to scan your device for any additional threats.</li>
</ul>
</li>
<li>
<strong>Follow IT Guidance:</strong>
<ul>
<li>Adhere to any additional steps provided by the IT department to secure your account and device.</li>
</ul>
</li>
<li>
<strong>Document the Incident:</strong>
<ul>
<li>Document all details of the incident, including how it was received, any information disclosed, and the initial response actions taken.</li>
</ul>
</li>
<li>
<strong>Stay Vigilant:</strong>
<ul>
<li>Be extra cautious with emails and communications and report any further suspicious activities immediately.</li>
</ul>
</li>
</ol>
<img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/em_databreach.jpg?raw=true" alt="Data Breach Response" width="" height="500" style="display: block; margin: 0 auto;" />
</div>
`;
                document.getElementById('ref').innerHTML = `
<li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
<li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
<li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
    
`;
document.getElementById('action').innerHTML = `
 <h3>Action Area</h3>
               
                <ul>
                    <li>Contain the Breach</li>
                    <li>Report and Communicate</li>
                     <li>Facilitate Forensic Analysis</li>
                      <li>Reinforce Security Measures</li>
                </ul>
`;
                }

                else if(r == 'executive' && w == 'data-breach')
                    {
                        
                    document.getElementById('action').style.display = 'block';
                    document.getElementById('home').style.display = 'none';
                    document.getElementById('content-main').style.display = 'block';
                    document.getElementById('fl-statutes').style.display = 'none';
                    document.getElementById('content-main').innerHTML = `
     <h2>Executive Team: Data Breach Response</h2>
<p>In the event of a data breach, the response steps should be clearly defined for each role to ensure a swift and effective reaction.</p>
<div class="section">
<h3>Steps to Take After a Data Breach:</h3>
<ol>
<li>
<strong>Assess the Impact:</strong>
<ul>
<li>Evaluate the scope of the breach, including what data was compromised and how it affects the organization.</li>
</ul>
</li>
<li>
<strong>Activate Incident Response Plan:</strong>
<ul>
<li>Ensure the incident response team is fully engaged and leading the mitigation efforts.</li>
</ul>
</li>
<li>
<strong>Coordinate with Legal and Regulatory Authorities:</strong>
<ul>
<li>Report the breach to relevant authorities as required by applicable laws and regulations.</li>
<li>Engage legal counsel to manage potential liabilities and compliance issues.</li>
</ul>
</li>
<li>
<strong>Internal Communication:</strong>
<ul>
<li>Inform key stakeholders, including board members and department heads, about the breach and the steps being taken.</li>
</ul>
</li>
<li>
<strong>External Communication:</strong>
<ul>
<li>Prepare a public statement if necessary to address the breach, ensuring transparency and maintaining public trust.</li>
</ul>
</li>
<li>
<strong>Review and Improve Security Measures:</strong>
<ul>
<li>Conduct a post-incident analysis to identify weaknesses and implement stronger security measures to prevent future breaches.</li>
</ul>
</li>
<li>
<strong>Support for Affected Parties:</strong>
<ul>
<li>Provide support and guidance to employees and customers affected by the breach, including credit monitoring if personal information was compromised.</li>
</ul>
</li>
</ol>
<img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/ex_databreach.jpg?raw=true" alt="Data Breach Response" width="" height="500" style="display: block; margin: 0 auto;" />
</div>
    `;
                    document.getElementById('ref').innerHTML = `
    <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
    <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
    <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
        
    `;
    document.getElementById('action').innerHTML = `
     <h3>Action Area</h3>
                   
                    <ul>
                        <li>Contain the Breach</li>
                        <li>Report and Communicate</li>
                         <li>Facilitate Forensic Analysis</li>
                          <li>Reinforce Security Measures</li>
                    </ul>
    `;
                    }

                    else if(r == 'manager' && w == 'data-breach')
                        {
                            
                        document.getElementById('action').style.display = 'block';
                        document.getElementById('home').style.display = 'none';
                        document.getElementById('content-main').style.display = 'block';
                        document.getElementById('fl-statutes').style.display = 'none';
                        document.getElementById('content-main').innerHTML = `
         <h2>People Managers: Data Breach Response</h2>
<p>In the event of a data breach, people managers should take the following steps to manage the situation effectively:</p>
<div class="section">
<h3>Steps to Take After a Data Breach:</h3>
<ol>
<li>
<strong>Report to IT and Upper Management:</strong>
<ul>
<li>Immediately inform the IT department and your direct superior about the incident.</li>
</ul>
</li>
<li>
<strong>Contain the Breach:</strong>
<ul>
<li>Work with the IT department to isolate affected systems and prevent further damage.</li>
</ul>
</li>
<li>
<strong>Identify and Assist Affected Team Members:</strong>
<ul>
<li>Determine which team members were affected and provide them with specific instructions to secure their systems.</li>
</ul>
</li>
<li>
<strong>Communicate with Your Team:</strong>
<ul>
<li>Clearly communicate the situation to your team and provide guidance on next steps.</li>
</ul>
</li>
<li>
<strong>Facilitate Forensic Analysis:</strong>
<ul>
<li>Assist the IT and security teams with collecting information and evidence for forensic analysis.</li>
</ul>
</li>
<li>
<strong>Reinforce Security Protocols:</strong>
<ul>
<li>Conduct an immediate refresher training session to reinforce cybersecurity best practices and prevent future incidents.</li>
</ul>
</li>
<li>
<strong>Monitor for Further Threats:</strong>
<ul>
<li>Keep an eye on team activities and communications for signs of additional breaches or suspicious behavior.</li>
</ul>
</li>
</ol>
<img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/pm_databreach.jpg?raw=true" alt="Data Breach Response" width="" height="500" style="display: block; margin: 0 auto;" />
</div>
        `;
                        document.getElementById('ref').innerHTML = `
        <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
        <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
        <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
            
        `;
        document.getElementById('action').innerHTML = `
         <h3>Action Area</h3>
                       
                        <ul>
                            <li>Contain the Breach</li>
                            <li>Report and Communicate</li>
                             <li>Facilitate Forensic Analysis</li>
                              <li>Reinforce Security Measures</li>
                        </ul>
        `;
                        }

                        else if(r == 'blank' && w == 'data-breach')
                            {
                                
                            document.getElementById('action').style.display = 'block';
                            document.getElementById('home').style.display = 'none';
                            document.getElementById('content-main').style.display = 'block';
                            document.getElementById('fl-statutes').style.display = 'none';
                            document.getElementById('content-main').innerHTML = `
             
<h1>Data Breaches</h1>

<h2>How Data Breaches Happen</h2>
<p>Data breaches occur when sensitive, protected, or confidential data is accessed, used, or disclosed without authorization. Breaches can result from malicious attacks, such as hacking, or can be due to human error, such as sending an email with sensitive information to the wrong recipient. Attackers often target businesses with weak security measures or exploit vulnerabilities in software or systems.</p>
<img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/databreach.png?raw=true" alt="Data Breach Illustration" width="" height="300" style="display: block; margin: 0 auto;" />

<h2>What You Can Do</h2>
<p>To protect yourself and your organization from data breaches, follow these best practices:</p>
<ul>
<li><strong>Use strong passwords:</strong> Ensure that all accounts use strong, unique passwords, and change them regularly. Consider using a password manager to store and generate complex passwords.</li>
<li><strong>Enable multi-factor authentication (MFA):</strong> Add an extra layer of security to your accounts by enabling MFA. This makes it harder for attackers to gain access even if they obtain your password.</li>
<li><strong>Be cautious with data sharing:</strong> Limit the sharing of sensitive information and ensure that data is only shared through secure channels. Always verify the recipient’s identity before sending sensitive information.</li>
</ul>

<h2>How to Protect Your Business</h2>
<p>Implement these strategies to safeguard your business from data breaches:</p>
<ul>
<li><strong>Encrypt sensitive data:</strong> Protect sensitive information by encrypting it both at rest and in transit. Encryption ensures that even if data is intercepted, it cannot be read without the decryption key.</li>
<li><strong>Regularly update and patch systems:</strong> Keep your software, operating systems, and security tools up to date to protect against vulnerabilities that could be exploited by attackers.</li>
<li><strong>Conduct regular security audits:</strong> Regularly review and assess your security measures to identify and address potential weaknesses. Consider hiring third-party experts for thorough penetration testing.</li>
<li><strong>Implement data access controls:</strong> Restrict access to sensitive data to only those employees who need it to perform their job duties. Use role-based access controls and regularly review permissions.</li>
</ul>

<h2>What if You Experience a Data Breach</h2>
<p>If your organization experiences a data breach, take the following steps:</p>
<ul>
<li><strong>Contain the breach:</strong> Immediately take steps to contain the breach by disconnecting affected systems from the network and securing any compromised accounts.</li>
<li><strong>Assess the damage:</strong> Determine the scope of the breach by identifying the data that was accessed or stolen and assessing the impact on your organization and affected individuals.</li>
<li><strong>Notify affected parties:</strong> If personal or sensitive data has been compromised, notify the affected individuals and provide them with information on how to protect themselves from identity theft or fraud.</li>
<li><strong>Report the breach:</strong> Depending on the jurisdiction and the nature of the breach, you may be required to report the incident to regulatory authorities. Be sure to follow all legal requirements for breach notification.</li>
<li><strong>Review and improve security measures:</strong> After the breach has been contained, review your security practices and take steps to prevent future breaches. This may include updating security policies, improving employee training, and investing in stronger security technologies.</li>
</ul>

<iframe width="560" height="315" src="https://www.youtube.com/embed/NeUmClyrwBs" title="Data Breach Awareness Video" frameborder="0" allowfullscreen></iframe>

<br>
<p style="color:red;">* To learn more about protecting yourself from data breaches based on your specific role, please select your role from the left pane.</p>

            `;
                            document.getElementById('ref').innerHTML = `
            <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
            <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
            <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
                
            `;
            document.getElementById('action').innerHTML = `
             <h3>Action Area</h3>
                           
                            <ul>
                                <li>Contain the Breach</li>
                                <li>Report and Communicate</li>
                                 <li>Facilitate Forensic Analysis</li>
                                  <li>Reinforce Security Measures</li>
                            </ul>
            `;
                            }

                            else if(r == 'employee' && w == 'malware')
                                {
                                    
                                document.getElementById('action').style.display = 'block';
                                document.getElementById('home').style.display = 'none';
                                document.getElementById('content-main').style.display = 'block';
                                document.getElementById('fl-statutes').style.display = 'none';
                                document.getElementById('content-main').innerHTML = `
                 
    <h2>Employees: Malware Infection Response</h2>
<p>If you suspect you have been targeted by a malware infection, follow these steps immediately:</p>
<div class="section">
<h3>Steps to Take After a Malware Infection:</h3>
<ol>
<li>
<strong>Report the Incident:</strong>
<ul>
<li>Immediately report the malware infection to the IT department and follow their instructions.</li>
</ul>
</li>
<li>
<strong>Disconnect from Network:</strong>
<ul>
<li>Disconnect the compromised device from the network to prevent further spread of the malware.</li>
</ul>
</li>
<li>
<strong>Change Passwords:</strong>
<ul>
<li>Change passwords for all accounts, especially those accessed through the compromised device.</li>
</ul>
</li>
<li>
<strong>Run Security Scans:</strong>
<ul>
<li>Use antivirus and anti-malware software to scan your device for any additional threats.</li>
</ul>
</li>
<li>
<strong>Follow IT Guidance:</strong>
<ul>
<li>Adhere to any additional steps provided by the IT department to secure your account and device.</li>
</ul>
</li>
<li>
<strong>Document the Incident:</strong>
<ul>
<li>Document all details of the incident, including how it was received, any information disclosed, and the initial response actions taken.</li>
</ul>
</li>
<li>
<strong>Stay Vigilant:</strong>
<ul>
<li>Be extra cautious with emails and communications and report any further suspicious activities immediately.</li>
</ul>
</li>
</ol>
<img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/em_malware.jpg?raw=true" alt="Malware Infection Response" width="" height="500" style="display: block; margin: 0 auto;" />
</div>
    
                `;
                                document.getElementById('ref').innerHTML = `
                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>
                    
                `;
                document.getElementById('action').innerHTML = `
                 <h3>Action Area</h3>
                               
                                <ul>
                                    <li>Contain the Breach</li>
                                    <li>Report and Communicate</li>
                                     <li>Facilitate Forensic Analysis</li>
                                      <li>Reinforce Security Measures</li>
                                </ul>
                `;
                                }

                                else if(r == 'executive' && w == 'malware')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h2>Executive Team: Malware Infection Response</h2>
                                    <p>In the event of a malware infection, the response steps should be clearly defined for each role to ensure a swift and effective reaction.</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Malware Infection:</h3>
                                    <ol>
                                    <li>
                                    <strong>Assess the Impact:</strong>
                                    <ul>
                                    <li>Evaluate the extent of the infection and what systems or data were affected.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Activate Incident Response Plan:</strong>
                                    <ul>
                                    <li>Ensure the incident response team is fully engaged and leading the mitigation efforts.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Engage IT and Security Teams:</strong>
                                    <ul>
                                    <li>Work with IT and security teams to identify and remove the malware.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Internal Communication:</strong>
                                    <ul>
                                    <li>Inform key stakeholders, including board members and department heads, about the infection and the steps being taken.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>External Communication:</strong>
                                    <ul>
                                    <li>Prepare a public statement if necessary to address the infection, ensuring transparency and maintaining public trust.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Review and Improve Security Measures:</strong>
                                    <ul>
                                    <li>Conduct a post-incident analysis to identify weaknesses and implement stronger security measures to prevent future infections.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Support for Affected Parties:</strong>
                                    <ul>
                                    <li>Provide support and guidance to employees affected by the infection.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/ex_malware.jpg?raw=true" alt="Malware Infection Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    
                                    
                                    else if(r == 'manager' && w == 'malware')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            
                                    <h2>People Managers: Malware Infection Response</h2>
                                    <p>In the event of a malware infection, people managers should take the following steps to manage the situation effectively:</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Malware Infection:</h3>
                                    <ol>
                                    <li>
                                    <strong>Report to IT and Upper Management:</strong>
                                    <ul>
                                    <li>Immediately inform the IT department and your direct superior about the incident.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Contain the Infection:</strong>
                                    <ul>
                                    <li>Work with the IT department to isolate affected systems and prevent further spread.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Identify and Assist Affected Team Members:</strong>
                                    <ul>
                                    <li>Determine which team members were affected and provide them with specific instructions to secure their systems.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Communicate with Your Team:</strong>
                                    <ul>
                                    <li>Clearly communicate the situation to your team and provide guidance on next steps.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Facilitate Forensic Analysis:</strong>
                                    <ul>
                                    <li>Assist the IT and security teams with collecting information and evidence for forensic analysis.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Reinforce Security Protocols:</strong>
                                    <ul>
                                    <li>Conduct an immediate refresher training session to reinforce cybersecurity best practices and prevent future incidents.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Monitor for Further Threats:</strong>
                                    <ul>
                                    <li>Keep an eye on team activities and communications for signs of additional threats or suspicious behavior.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/pm_malware.jpg?raw=true" alt="Malware Infection Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                    
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    
                                    else if(r == 'blank' && w == 'malware')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h1>Malware Infection</h1>
                                    
                                    <h2>How Malware Infections Happen</h2>
                                    <p>Malware, short for malicious software, is designed to disrupt, damage, or gain unauthorized access to computer systems. Malware can infect systems through various means, including phishing emails, malicious websites, infected USB drives, and vulnerabilities in software. Once installed, malware can steal sensitive data, encrypt files for ransom, or allow attackers to control the system remotely.</p>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/malware.jpg?raw=true" alt="Malware Infection Illustration" width="" height="300" style="display: block; margin: 0 auto;" />
                                    
                                    <h2>What You Can Do</h2>
                                    <p>To protect yourself and your organization from malware infections, consider these best practices:</p>
                                    <ul>
                                    <li><strong>Do not open suspicious emails:</strong> Avoid clicking on links or downloading attachments from unknown or untrusted sources. Phishing emails are a common method for spreading malware.</li>
                                    <li><strong>Install antivirus software:</strong> Use reputable antivirus and anti-malware software to detect and prevent malware infections. Ensure that the software is regularly updated to catch the latest threats.</li>
                                    <li><strong>Keep your system updated:</strong> Regularly update your operating system and all software applications to patch vulnerabilities that could be exploited by malware.</li>
                                    </ul>
                                    
                                    <h2>How to Protect Your Business</h2>
                                    <p>Implement these strategies to safeguard your business from malware infections:</p>
                                    <ul>
                                    <li><strong>Regular backups:</strong> Perform regular backups of critical data and store them offline. This ensures that you can recover your data in the event of a malware attack, such as ransomware.</li>
                                    <li><strong>Implement network security:</strong> Use firewalls, intrusion detection systems, and secure gateways to protect your network from unauthorized access and malware infiltration.</li>
                                    <li><strong>Employee training:</strong> Train your employees to recognize phishing attempts and other common tactics used to deliver malware. Regular awareness training is key to reducing the risk of infection.</li>
                                    <li><strong>Restrict administrative privileges:</strong> Limit administrative access to critical systems and data to reduce the potential impact of a malware infection. Ensure that users only have the permissions they need to perform their job duties.</li>
                                    </ul>
                                    
                                    <h2>What if You Experience a Malware Infection</h2>
                                    <p>If you suspect that your system has been infected with malware, take the following steps:</p>
                                    <ul>
                                    <li><strong>Disconnect from the network:</strong> Immediately disconnect the infected device from the network to prevent the malware from spreading to other systems.</li>
                                    <li><strong>Run a full system scan:</strong> Use your antivirus or anti-malware software to perform a full system scan and remove any detected threats. If the infection persists, consider seeking professional assistance.</li>
                                    <li><strong>Restore from backups:</strong> If the malware has compromised or encrypted your data, restore it from the most recent clean backup.</li>
                                    <li><strong>Notify your IT department:</strong> Report the infection to your IT department or security team so they can take additional steps to secure your network and prevent further infections.</li>
                                    <li><strong>Review and update security measures:</strong> After the incident, review your security practices and consider implementing additional safeguards to prevent future infections.</li>
                                    </ul>
                                    
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NMYbkzjI5EY" title="Malware Awareness Video" frameborder="0" allowfullscreen></iframe>
                                    
                                    <br>
                                    <p style="color:red;">* To learn more about protecting yourself from malware infections based on your specific role, please select your role from the left pane.</p>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'employee' && w == 'phishing')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            
                                    <h2>Employees: Phishing Attack Response</h2>
                                    <p>If you suspect you have been targeted by a phishing attack, follow these steps immediately:</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Phishing Attack:</h3>
                                    <ol>
                                    <li>
                                    <strong>Report the Incident:</strong>
                                    <ul>
                                    <li>Immediately report the phishing attack to the IT department and follow their instructions.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Disconnect from Network:</strong>
                                    <ul>
                                    <li>Disconnect the compromised device from the network to prevent further spread of malware or unauthorized access.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Change Passwords:</strong>
                                    <ul>
                                    <li>Change passwords for all accounts, especially those accessed through the compromised device or email.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Run Security Scans:</strong>
                                    <ul>
                                    <li>Use antivirus and anti-malware software to scan your device for any additional threats.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Follow IT Guidance:</strong>
                                    <ul>
                                    <li>Adhere to any additional steps provided by the IT department to secure your account and device.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Document the Incident:</strong>
                                    <ul>
                                    <li>Document all details of the phishing attack, including how it was received, any information disclosed, and the initial response actions taken.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Stay Vigilant:</strong>
                                    <ul>
                                    <li>Be extra cautious with emails and communications and report any further suspicious activities immediately.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/em_phishing.jpg?raw=true" alt="Phishing Attack Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                    
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'manager' && w == 'phishing')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h2>People Managers: Phishing Attack Response</h2>
                                    <p>In the event of a successful phishing attack, people managers should take the following steps to manage the situation effectively:</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Phishing Attack:</h3>
                                    <ol>
                                    <li>
                                    <strong>Report to IT and Upper Management:</strong>
                                    <ul>
                                    <li>Immediately inform the IT department and your direct superior about the incident.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Contain the Breach:</strong>
                                    <ul>
                                    <li>Work with the IT department to isolate compromised systems to prevent further damage.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Identify and Assist Affected Team Members:</strong>
                                    <ul>
                                    <li>Determine which team members were affected and provide them with specific instructions to secure their accounts.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Communicate with Your Team:</strong>
                                    <ul>
                                    <li>Clearly communicate the situation to your team and provide guidance on next steps.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Facilitate Forensic Analysis:</strong>
                                    <ul>
                                    <li>Assist the IT and security teams with collecting information and evidence for forensic analysis.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Reinforce Security Protocols:</strong>
                                    <ul>
                                    <li>Conduct an immediate refresher training session to reinforce cybersecurity best practices and prevent future incidents.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Monitor for Further Threats:</strong>
                                    <ul>
                                    <li>Keep an eye on team activities and communications for signs of additional phishing attempts or other suspicious behavior.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/pm_phishing.jpg?raw=true" alt="Phishing Attack Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'employee' && w == 'ransomware')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            
                                    <h2>Employees: Ransomware Attack Response</h2>
                                    <p>If you suspect you have been targeted by a ransomware attack, follow these steps immediately:</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Ransomware Attack:</h3>
                                    <ol>
                                    <li>
                                    <strong>Report the Incident:</strong>
                                    <ul>
                                    <li>Immediately report the ransomware attack to the IT department and follow their instructions.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Disconnect from Network:</strong>
                                    <ul>
                                    <li>Disconnect the compromised device from the network to prevent further spread of malware or unauthorized access.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Change Passwords:</strong>
                                    <ul>
                                    <li>Change passwords for all accounts, especially those accessed through the compromised device or email.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Run Security Scans:</strong>
                                    <ul>
                                    <li>Use antivirus and anti-malware software to scan your device for any additional threats.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Follow IT Guidance:</strong>
                                    <ul>
                                    <li>Adhere to any additional steps provided by the IT department to secure your account and device.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Document the Incident:</strong>
                                    <ul>
                                    <li>Document all details of the ransomware attack, including how it was received, any information disclosed, and the initial response actions taken.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Stay Vigilant:</strong>
                                    <ul>
                                    <li>Be extra cautious with emails and communications and report any further suspicious activities immediately.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/em_ransomware.jpg?raw=true" alt="Ransomware Attack Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                    
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'executive' && w == 'ransomware')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h2>Executive Team - Ransomware Attack Response</h2>
                                    <p>In the event of a successful ransomware attack, the response steps should be clearly defined for each role to ensure a swift and effective reaction.</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Ransomware Attack:</h3>
                                    <ol>
                                    <li>
                                    <strong>Assess the Impact:</strong>
                                    <ul>
                                    <li>Evaluate the extent of the attack and what systems or data have been compromised.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Activate Incident Response Plan:</strong>
                                    <ul>
                                    <li>Ensure the incident response team is fully engaged and leading the mitigation efforts.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Coordinate with Legal and Regulatory Authorities:</strong>
                                    <ul>
                                    <li>Report the attack to relevant authorities as required by <a href="https://www.flsenate.gov/Laws/Statutes/2024/282.3185">Florida’s Local Government Cybersecurity Act (F.S. 282.3185).</a></li>
                                    <li>Engage legal counsel to manage potential liabilities and compliance issues.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Internal Communication:</strong>
                                    <ul>
                                    <li>Inform key stakeholders, including board members and department heads, about the attack and the steps being taken.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>External Communication:</strong>
                                    <ul>
                                    <li>Prepare a public statement if necessary to address the attack, ensuring transparency and maintaining public trust.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Review and Improve Security Measures:</strong>
                                    <ul>
                                    <li>Conduct a post-incident analysis to identify weaknesses and implement stronger security measures to prevent future attacks.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Support for Affected Parties:</strong>
                                    <ul>
                                    <li>Provide support and guidance to employees affected by the attack, including assistance in data recovery.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/ex_ransomware.jpg?raw=true" alt="Ransomware Attack Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'blank' && w == 'ransomware')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h1>Ransomware</h1>
                                    
                                    <h2>How Ransomware Works</h2>
                                    <p>Ransomware is a type of malicious software designed to block access to a computer system or data, usually by encrypting it, until a ransom is paid. Attackers typically demand payment in cryptocurrency, making it difficult to trace. Ransomware can spread through phishing emails, malicious websites, or by exploiting vulnerabilities in software.</p>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/ransomware.jpg?raw=true" alt="Ransomware Attack" width="" height="300" style="display: block; margin: 0 auto;" />
                                    
                                    <h2>What You Can Do</h2>
                                    <p>Before you fall victim to a ransomware attack, consider the following preventive measures:</p>
                                    <ul>
                                    <li><strong>Backup regularly:</strong> Regularly back up your critical data and ensure the backups are stored offline and are not connected to your network. This ensures you can recover your data without paying the ransom.</li>
                                    <li><strong>Exercise caution with emails:</strong> Be wary of unsolicited emails, especially those with attachments or links. Verify the sender’s identity before clicking on any links or downloading attachments.</li>
                                    <li><strong>Update software:</strong> Keep your operating system, applications, and security software up to date with the latest patches. This minimizes the risk of ransomware exploiting known vulnerabilities.</li>
                                    </ul>
                                    
                                    <h2>How to Protect Your Business</h2>
                                    <p>Implement these strategies to safeguard your business from ransomware:</p>
                                    <ul>
                                    <li><strong>Employee training:</strong> Educate your employees on how to recognize phishing emails and other ransomware delivery methods. Awareness is a crucial defense against ransomware.</li>
                                    <li><strong>Implement security measures:</strong> Use robust security solutions, such as firewalls, antivirus software, and intrusion detection systems, to protect your network from ransomware threats.</li>
                                    <li><strong>Network segmentation:</strong> Segment your network to limit the spread of ransomware. This way, even if one part of your network is infected, the ransomware won’t easily propagate to other areas.</li>
                                    <li><strong>Access controls:</strong> Implement strict access controls and limit user permissions to reduce the risk of ransomware spreading throughout your network.</li>
                                    </ul>
                                    
                                    <h2>What if You Fall for a Ransomware Attack</h2>
                                    <p>If you become a victim of a ransomware attack, follow these steps:</p>
                                    <ul>
                                    <li><strong>Isolate infected systems:</strong> Immediately disconnect infected systems from the network to prevent the ransomware from spreading.</li>
                                    <li><strong>Report the incident:</strong> Notify your IT department and follow your organization’s incident response plan. Reporting early can help contain the damage.</li>
                                    <li><strong>Do not pay the ransom:</strong> Paying the ransom does not guarantee that you will regain access to your data, and it encourages further criminal activity. Instead, focus on recovering data from backups and restoring your systems.</li>
                                    <li><strong>Engage professionals:</strong> Contact cybersecurity experts to assist in removing the ransomware and restoring your systems. They can also help identify the attack vector and prevent future incidents.</li>
                                    <li><strong>Notify affected parties:</strong> If sensitive data has been compromised, notify the relevant stakeholders and provide them with guidance on protecting themselves.</li>
                                    </ul>
                                    <br>
                                    
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lIsWpCMBxHQ" title="Ransomware Awareness Video" frameborder="0" allowfullscreen></iframe>
                                    
                                    <br>
                                    <p style="color:red;">* To learn more about protecting yourself from ransomware based on your specific role, please select your role from the left pane.</p>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'employee' && w == 'social-engineering')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            
                                    <h2>Employees: Social Engineering Attack Response</h2>
                                    <p>If you suspect you have been targeted by a social engineering attack, follow these steps immediately:</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Social Engineering Attack:</h3>
                                    <ol>
                                    <li>
                                    <strong>Report the Incident:</strong>
                                    <ul>
                                    <li>Immediately report the social engineering attack to the IT department and follow their instructions.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Disconnect from Network:</strong>
                                    <ul>
                                    <li>Disconnect the compromised device from the network to prevent further spread of the attack.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Change Passwords:</strong>
                                    <ul>
                                    <li>Change passwords for all accounts, especially those accessed through the compromised device.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Run Security Scans:</strong>
                                    <ul>
                                    <li>Use antivirus and anti-malware software to scan your device for any additional threats.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Follow IT Guidance:</strong>
                                    <ul>
                                    <li>Adhere to any additional steps provided by the IT department to secure your account and device.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Document the Incident:</strong>
                                    <ul>
                                    <li>Document all details of the incident, including how it was received, any information disclosed, and the initial response actions taken.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Stay Vigilant:</strong>
                                    <ul>
                                    <li>Be extra cautious with emails and communications and report any further suspicious activities immediately.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/em_social.jpg?raw=true" alt="Social Engineering Attack Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                    
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'executive' && w == 'social-engineering')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h2>Executive Team: Social Engineering Attack Response</h2>
                                    <p>In the event of a successful social engineering attack, the response steps should be clearly defined for each role to ensure a swift and effective reaction.</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Social Engineering Attack:</h3>
                                    <ol>
                                    <li>
                                    <strong>Assess the Impact:</strong>
                                    <ul>
                                    <li>Evaluate the extent of the attack and what information was compromised.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Activate Incident Response Plan:</strong>
                                    <ul>
                                    <li>Ensure the incident response team is fully engaged and leading the mitigation efforts.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Coordinate with Legal and HR Teams:</strong>
                                    <ul>
                                    <li>Engage legal and HR teams to manage potential liabilities and compliance issues.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Internal Communication:</strong>
                                    <ul>
                                    <li>Inform key stakeholders, including board members and department heads, about the attack and the steps being taken.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>External Communication:</strong>
                                    <ul>
                                    <li>Prepare a public statement if necessary to address the attack, ensuring transparency and maintaining public trust.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Review and Improve Security Measures:</strong>
                                    <ul>
                                    <li>Conduct a post-incident analysis to identify weaknesses and implement stronger security measures to prevent future attacks.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Support for Affected Parties:</strong>
                                    <ul>
                                    <li>Provide support and guidance to employees affected by the attack.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/ex_social.jpg?raw=true" alt="Social Engineering Attack Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    
                                    else if(r == 'manager' && w == 'social-engineering')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h2>People Managers: Social Engineering Attack Response</h2>
                                    <p>In the event of a successful social engineering attack, people managers should take the following steps to manage the situation effectively:</p>
                                    <div class="section">
                                    <h3>Steps to Take After a Social Engineering Attack:</h3>
                                    <ol>
                                    <li>
                                    <strong>Report to IT and Upper Management:</strong>
                                    <ul>
                                    <li>Immediately inform the IT department and your direct superior about the incident.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Contain the Threat:</strong>
                                    <ul>
                                    <li>Work with the IT department to isolate affected systems and prevent further spread.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Identify and Assist Affected Team Members:</strong>
                                    <ul>
                                    <li>Determine which team members were affected and provide them with specific instructions to secure their systems.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Communicate with Your Team:</strong>
                                    <ul>
                                    <li>Clearly communicate the situation to your team and provide guidance on next steps.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Facilitate Forensic Analysis:</strong>
                                    <ul>
                                    <li>Assist the IT and security teams with collecting information and evidence for forensic analysis.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Reinforce Security Protocols:</strong>
                                    <ul>
                                    <li>Conduct an immediate refresher training session to reinforce cybersecurity best practices and prevent future incidents.</li>
                                    </ul>
                                    </li>
                                    <li>
                                    <strong>Monitor for Further Threats:</strong>
                                    <ul>
                                    <li>Keep an eye on team activities and communications for signs of additional threats or suspicious behavior.</li>
                                    </ul>
                                    </li>
                                    </ol>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/pm_social.jpg?raw=true" alt="Social Engineering Attack Response" width="" height="500" style="display: block; margin: 0 auto;" />
                                    </div>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }
                                    else if(r == 'blank' && w == 'social-engineering')
                                    {
                                                                    
                                            document.getElementById('action').style.display = 'block';
                                            document.getElementById('home').style.display = 'none';
                                            document.getElementById('content-main').style.display = 'block';
                                            document.getElementById('fl-statutes').style.display = 'none';
                                            document.getElementById('content-main').innerHTML = `
                                            <h1>Social Engineering Attacks</h1>
                                    
                                    <h2>How Social Engineering Works</h2>
                                    <p>Social engineering is a form of cyber attack that exploits human psychology rather than technical vulnerabilities. Attackers manipulate individuals into divulging confidential information or performing actions that compromise security. Common tactics include impersonation, pretexting, phishing, and baiting, where the attacker gains the victim's trust to achieve their malicious goals.</p>
                                    <img src="https://github.com/senjapuri/Handbook/blob/main/website%20content/images/social.jpg?raw=true" alt="Social Engineering Attack" width="" height="300" style="display: block; margin: 0 auto;" />
                                    
                                    <h2>What You Can Do</h2>
                                    <p>To protect yourself and your organization from social engineering attacks, follow these best practices:</p>
                                    <ul>
                                    <li><strong>Be cautious of unsolicited requests:</strong> Always verify the identity of individuals requesting sensitive information or access, especially if the request is unexpected or urgent.</li>
                                    <li><strong>Limit the sharing of personal information:</strong> Be mindful of the information you share publicly or over the phone, as attackers can use this information to impersonate you or someone you trust.</li>
                                    <li><strong>Question suspicious scenarios:</strong> If something doesn’t feel right, take a moment to question the scenario. Scammers often create a sense of urgency to pressure you into making hasty decisions.</li>
                                    </ul>
                                    
                                    <h2>How to Protect Your Business</h2>
                                    <p>Implement these strategies to safeguard your business from social engineering attacks:</p>
                                    <ul>
                                    <li><strong>Employee training:</strong> Regularly train employees to recognize and respond to social engineering tactics. Awareness is your first line of defense against these types of attacks.</li>
                                    <li><strong>Establish verification procedures:</strong> Implement strict procedures for verifying identities before granting access to sensitive information or systems. Use multi-factor authentication where possible.</li>
                                    <li><strong>Limit access to information:</strong> Restrict access to sensitive data on a need-to-know basis. The less information available to potential attackers, the lower the risk of a successful social engineering attack.</li>
                                    <li><strong>Monitor and log access:</strong> Keep detailed logs of access to sensitive information and systems. Monitoring access can help detect and respond to unauthorized attempts more quickly.</li>
                                    </ul>
                                    
                                    <h2>What if You Fall for a Social Engineering Attack</h2>
                                    <p>If you suspect you have been a victim of a social engineering attack, take the following steps:</p>
                                    <ul>
                                    <li><strong>Report the incident:</strong> Immediately report the attack to your IT department or security team. Early reporting can help mitigate the damage and prevent further exploitation.</li>
                                    <li><strong>Change compromised credentials:</strong> If login credentials have been compromised, change them immediately. Enable multi-factor authentication to add an extra layer of security.</li>
                                    <li><strong>Review access logs:</strong> Check access logs to identify any unauthorized actions or access that may have occurred as a result of the attack.</li>
                                    <li><strong>Conduct a security audit:</strong> After the incident, perform a thorough security audit to identify vulnerabilities and implement corrective measures to prevent future attacks.</li>
                                    </ul>
                                    
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/v7VTJhkJUUY" title="Social Engineering Awareness Video" frameborder="0" allowfullscreen></iframe>
                                    
                                    <br>
                                    <p style="color:red;">* To learn more about protecting yourself from social engineering based on your specific role, please select your role from the left pane.</p>
                                                `;
                                            document.getElementById('ref').innerHTML = `
                                                <li><a href="https://www.fbi.gov/investigate/cyber/ransomware" target="_blank">FBI - Ransomware</a></li>
                                                <li><a href="https://www.cisa.gov/ransomware" target="_blank">CISA - Ransomware</a></li>
                                                <li><a href="https://us-cert.cisa.gov/Ransomware" target="_blank">US-CERT - Ransomware</a></li>        
                                            `;
                                            document.getElementById('action').innerHTML = `
                                                 <h3>Action Area</h3>    
                                                    <ul>
                                                        <li>Contain the Breach</li>
                                                        <li>Report and Communicate</li>
                                                        <li>Facilitate Forensic Analysis</li>
                                                        <li>Reinforce Security Measures</li>
                                                    </ul>
                                                `;
                                    }


        else
        {
            document.getElementById('home').style.display = 'block';
            document.getElementById('content-main').style.display = 'none';
            document.getElementById('fl-statutes').style.display = 'none';
            document.getElementById('action').innerHTML = `
     <h3>Subscribe</h3>
                <p>Subscribe to our Newsletter:</p>
                <p><input type="text" placeholder="Your Email.." style="
    font-family: Arial, sans-serif; /* Font style */
    font-size: 16px; /* Font size */
    color: #333; /* Text color */
    background-color: #f9f9f9; /* Background color */
    border: 1px solid #ccc; /* Border style */
    border-radius: 4px; /* Rounded corners */
    padding: 10px; /* Padding inside the input box */
    width: 100%; /* Full width */
    max-width: 300px; /* Maximum width */
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
"/></p>
<button onclick="showContentOnBtn()" style="
background-color: #00703c; /* Button background color */
color: white; /* Text color */
border: none; /* Remove default border */
border-radius: 10px; /* Rounded corners */

font-size: 16px; /* Font size */
padding: 5px 15px; /* Padding inside the button */
cursor: pointer; /* Cursor style when hovering */
transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth color and transform transitions */
">

Subscribe
</button>
    `;
    document.getElementById('ref').innerHTML = `
    <li><a href="#">NIST Cybersecurity Framework</a></li>
                    <li><a href="#">Local Government Cybersecurity Act (F.S. 282.3185)</a></li>
                    <li><a href="#">Cybersecurity Best Practices</a></li>
        
    `;

        }
}

function topicalSearch(topic)
{
            document.getElementById('home').style.display = 'none';
            document.getElementById('action').style.display = 'none';
            document.getElementById('fl-statutes').style.display = 'none';
            document.getElementById('content-main').style.display = 'block';
            if(topic == 'mds')
            {
                document.getElementById('content-main').innerHTML = `
    <h2>Mobile Device Security</h2>

    <p>Mobile device security has become increasingly crucial in today's digital age, as smartphones and tablets have become integral parts of our daily routines. These devices store a vast amount of personal and sensitive information, including contacts, emails, financial details, and work-related data. As a result, they are prime targets for cybercriminals seeking to exploit vulnerabilities. Protecting mobile devices from unauthorized access, data breaches, and other cyber threats is essential to maintaining personal privacy and organizational integrity.</p>

    <p>One of the most prevalent threats to mobile device security is malware. Malware refers to malicious software designed to disrupt, damage, or gain unauthorized access to devices. It can be distributed through various channels, including malicious apps, email attachments, or compromised websites. Once installed on a device, malware can perform a range of harmful activities, such as stealing personal information, tracking user activity, or even taking control of the device remotely. Users should exercise caution by downloading apps only from reputable sources, keeping their devices updated with the latest security patches, and using antivirus software to detect and mitigate malware threats.</p>
<img src="https://media.licdn.com/dms/image/D5612AQHsrHph0GUgHg/article-inline_image-shrink_1500_2232/0/1659009357643?e=1726704000&v=beta&t=Th3vVhonE4ufLBKFJ4C_b8mWpUcmWyqtsJZoW8BuBeE" alt="Mobile Security" width="" height="400" style="display: block; margin: 0 auto;" />


    <p>🛡️ Phishing attacks are a major threat to mobile device security. Cybercriminals use deceptive emails, texts, or fake websites to trick users into revealing sensitive information like login credentials or financial details. These attacks often create a sense of urgency to bypass verification. To defend against phishing, users should be cautious with unsolicited communications, verify requests, and avoid suspicious links and attachments.</p>

<p>🔐 Device encryption is crucial for protecting data on mobile devices. It converts readable data into a coded format that only authorized users can decrypt. This ensures that even if a device is lost or stolen, the data remains secure. Most modern devices offer built-in encryption, which should be activated to enhance security and protect against unauthorized access.</p>

<p>⚙️ Regular software updates are essential for mobile device security. They include patches for vulnerabilities and improvements to device stability and performance. Users should enable automatic updates to receive the latest security fixes promptly and periodically check for manual updates to keep their operating system and apps current.</p>


<iframe width="420" height="280" src="https://www.youtube.com/embed/AXHTVTDj-R8" style="display: block; margin: 0 auto;" >
</iframe>
 

    <p>In addition to the aforementioned measures, users should adopt best practices for mobile device security. This includes setting strong passwords, enabling biometric authentication (such as fingerprint or facial recognition), and avoiding the use of public Wi-Fi networks for sensitive transactions. Users should also be cautious when connecting their devices to unknown or unsecured networks and consider using virtual private networks (VPNs) to encrypt their internet traffic and protect their data from interception.</p>

    <p>By understanding and implementing robust security practices, both individuals and organizations can significantly reduce the risk of mobile device security breaches. Staying informed about emerging threats and evolving security technologies is essential for adapting to the ever-changing landscape of mobile device security and ensuring that personal and organizational data remains protected.</p>
`;
document.getElementById('ref').innerHTML = `
<li><a href="https://www.csoonline.com/article/3232256/mobile-security.html">CSO Online - Mobile Security</a></li>
        <li><a href="https://www.techradar.com/news/mobile-security">TechRadar - Mobile Security</a></li>
        <li><a href="https://www.ncsc.gov.uk/guidance/mobile-device-security">National Cyber Security Centre - Mobile Device Security</a></li>
`;

}
else if(topic == 'mfa')
    {
        document.getElementById('content-main').innerHTML = `

<h2>Multi-Factor Authentication</h2>

<p>In an era where cyber threats are becoming increasingly sophisticated, relying solely on passwords for security is no longer sufficient. Multi-Factor Authentication (MFA) provides an additional layer of defense by requiring users to verify their identity through multiple means. This approach significantly reduces the likelihood of unauthorized access, even if a user's password is compromised.</p>

<p>MFA works by combining two or more different types of authentication factors: something you know (like a password), something you have (like a smartphone or a security token), and something you are (biometric data such as fingerprints or facial recognition). By requiring more than one factor, MFA makes it much harder for attackers to gain access to accounts and systems, even if they have obtained one of the factors.</p>

<img src="https://cdn.prod.website-files.com/6030224cd6bd6661c0d922f1/64fb4866477c47f2d0306a22_MFA%20glossary%20image.jpeg" alt="Multi-Factor Authentication" width="" height="300" style="display: block; margin: 0 auto;" />

<p>🛡️ One common form of MFA is the use of SMS-based verification, where a code is sent to your mobile phone that you must enter to complete the login process. While this is a widely used method, it is not without its vulnerabilities. Attackers can intercept SMS messages through SIM swapping or other techniques, so it's crucial to be aware of these risks and consider more secure forms of MFA when available.</p>

<p>🔐 Authenticator apps, such as Google Authenticator or Authy, offer a more secure alternative to SMS-based MFA. These apps generate time-based one-time passwords (TOTP) that expire after a short period, adding an extra layer of security. Because the codes are generated on your device and not transmitted over potentially insecure channels, authenticator apps are less susceptible to interception.</p>

<iframe width="420" height="280" src="https://www.youtube.com/embed/0mvCeNsTa1g" style="display: block; margin: 0 auto;"></iframe>

<p>Biometric authentication, which uses unique biological traits such as fingerprints, facial recognition, or iris scans, is another powerful form of MFA. These methods offer a high level of security because they are difficult to replicate or steal. However, users should be mindful of the privacy implications and ensure that their biometric data is stored securely. In cases where biometric data is stored on a device rather than in the cloud, the risk of data breaches is reduced.</p>

<p>Incorporating MFA into your security practices is one of the most effective ways to protect your online accounts and sensitive information. Although MFA may introduce a slight inconvenience by adding an extra step to the login process, the enhanced security it provides is well worth the effort. Organizations should enforce MFA policies for all critical systems and encourage employees to enable MFA on personal accounts as well. By doing so, they can significantly reduce the risk of unauthorized access and protect valuable data from cyber threats.</p>

`;
}

else if(topic == 'set')
    {
        document.getElementById('content-main').innerHTML = `

        <h2>Social Engineering Threats</h2>

        <p>Social engineering is a sophisticated and insidious form of cyberattack that exploits human psychology rather than technical vulnerabilities. Unlike traditional hacking methods, social engineering relies on tricking individuals into divulging sensitive information or performing actions that compromise security. These attacks are often subtle, making them difficult to detect and prevent. Understanding the various forms of social engineering and how to defend against them is crucial for maintaining both personal and organizational security.</p>
        
        <p>Phishing remains one of the most prevalent social engineering tactics. It typically involves sending fraudulent emails that appear to come from legitimate sources, such as banks, social media platforms, or colleagues. These emails often contain urgent messages designed to provoke an emotional response, such as a warning that your account has been compromised or that a payment is overdue. The goal is to trick the recipient into clicking on a malicious link or providing sensitive information, such as login credentials or credit card numbers.</p>
        
        <img src="https://cheapsslsecurity.com/blog/wp-content/uploads/2022/05/social-engineering-attacks-1.jpg" alt="Social Engineering Threats" width="" height="400" style="display: block; margin: 0 auto;" />
        
        <p>🛡️ Spear phishing is a more targeted form of phishing, where the attacker customizes the message to a specific individual or organization. By researching their target, the attacker can create a highly convincing email that appears to be from a trusted source. For example, a spear phishing email might appear to come from a CEO to a finance employee, instructing them to transfer funds to a certain account. Due to its personalized nature, spear phishing is particularly effective and dangerous.</p>
        
        <p>🔐 Another form of social engineering is pretexting, where an attacker fabricates a scenario to gain the victim's trust and obtain information. For example, an attacker might pose as a bank employee and ask for personal details to "verify your identity." The key to pretexting is the creation of a plausible story that convinces the victim to comply with the request. Defending against pretexting involves being cautious about sharing personal information and verifying the identity of anyone requesting sensitive data.</p>
        
        <iframe width="420" height="280" src="https://www.youtube.com/embed/2eVwBlKlMmE" style="display: block; margin: 0 auto;"></iframe>
        
        <p>Baiting is another social engineering tactic that exploits curiosity or greed. Attackers might leave infected USB drives labeled "Confidential" in public places, hoping someone will pick them up and plug them into their computer. Once connected, the USB drive installs malware that can steal data or give the attacker remote access to the victim's system. To avoid falling victim to baiting, never use unknown USB drives or other external devices.</p>
        
        <p>To defend against social engineering, awareness and education are key. Organizations should regularly train employees on the latest social engineering tactics and encourage a culture of skepticism when dealing with unsolicited requests for information or actions. By staying informed and vigilant, individuals and organizations can protect themselves from the manipulative tactics of social engineers.</p>
`;
}

else if(topic == 'sbp')
    {
        document.getElementById('content-main').innerHTML = `

        <h2>Secure Browsing Practices</h2>

        <p>In today's interconnected world, browsing the internet has become a daily activity for most people. However, with this convenience comes a host of security risks. Whether you're checking your email, shopping online, or simply reading the news, secure browsing practices are essential to protect your personal information from cyber threats. Failing to follow these practices can lead to identity theft, financial loss, and other severe consequences.</p>
        
        <p>One of the most fundamental secure browsing practices is ensuring that you only visit websites that use HTTPS. HTTPS, or Hypertext Transfer Protocol Secure, encrypts the data exchanged between your browser and the website, making it significantly harder for attackers to intercept sensitive information like passwords, credit card numbers, and personal details. You can identify an HTTPS site by looking for the padlock icon in the address bar of your browser.</p>
        
        <img src="https://cybersecurityontario.ca/_repo/images/secure-web-browsing.png" alt="Secure Browsing Practices" width="" height="400" style="display: block; margin: 0 auto;" />
        
        <p>🛡️ Another critical aspect of secure browsing is the use of ad blockers and anti-tracking tools. Advertisements can often be gateways for malware, especially on less reputable sites. Ad blockers prevent these ads from appearing, reducing your exposure to potential threats. Additionally, many websites track your browsing habits, creating profiles that can be exploited by malicious actors. Anti-tracking tools help protect your privacy by blocking these trackers and ensuring that your online activities remain confidential.</p>
        
        <p>🔐 Using a Virtual Private Network (VPN) is another effective way to secure your browsing experience, particularly when connected to public Wi-Fi networks. Public Wi-Fi is notoriously insecure, making it easy for hackers to intercept your data. A VPN encrypts your internet traffic, creating a secure tunnel between your device and the websites you visit. This not only protects your data from eavesdroppers but also helps maintain your anonymity online.</p>
        
        <iframe width="420" height="280" src="https://www.youtube.com/embed/xa7qaSJeyRQ" style="display: block; margin: 0 auto;"></iframe>
        
        <p>Another practice to enhance your browsing security is to regularly update your browser and plugins. Software updates often include patches for security vulnerabilities that could otherwise be exploited by hackers. Ensuring that your browser and any installed plugins are up to date minimizes the risk of falling victim to attacks that exploit these weaknesses.</p>
        
        <p>Finally, be mindful of the information you share online. Avoid entering sensitive data, such as social security numbers or financial information, on websites that you don't fully trust. If a website requests such information, ensure that it is legitimate by verifying the domain name and researching the site if necessary. By following these secure browsing practices, you can significantly reduce your risk of encountering online threats and protect your personal and organizational data.</p>
`;
}
else
    {
        document.getElementById('content-main').innerHTML = `

        <h2>Secure Browsing Practices</h2>

        <p>In today's interconnected world, browsing the internet has become a daily activity for most people. However, with this convenience comes a host of security risks. Whether you're checking your email, shopping online, or simply reading the news, secure browsing practices are essential to protect your personal information from cyber threats. Failing to follow these practices can lead to identity theft, financial loss, and other severe consequences.</p>
        
        <p>One of the most fundamental secure browsing practices is ensuring that you only visit websites that use HTTPS. HTTPS, or Hypertext Transfer Protocol Secure, encrypts the data exchanged between your browser and the website, making it significantly harder for attackers to intercept sensitive information like passwords, credit card numbers, and personal details. You can identify an HTTPS site by looking for the padlock icon in the address bar of your browser.</p>
        
        <img src="https://cybersecurityontario.ca/_repo/images/secure-web-browsing.png" alt="Secure Browsing Practices" width="" height="400" style="display: block; margin: 0 auto;" />
        
        <p>🛡️ Another critical aspect of secure browsing is the use of ad blockers and anti-tracking tools. Advertisements can often be gateways for malware, especially on less reputable sites. Ad blockers prevent these ads from appearing, reducing your exposure to potential threats. Additionally, many websites track your browsing habits, creating profiles that can be exploited by malicious actors. Anti-tracking tools help protect your privacy by blocking these trackers and ensuring that your online activities remain confidential.</p>
        
        <p>🔐 Using a Virtual Private Network (VPN) is another effective way to secure your browsing experience, particularly when connected to public Wi-Fi networks. Public Wi-Fi is notoriously insecure, making it easy for hackers to intercept your data. A VPN encrypts your internet traffic, creating a secure tunnel between your device and the websites you visit. This not only protects your data from eavesdroppers but also helps maintain your anonymity online.</p>
        
        <iframe width="420" height="280" src="https://www.youtube.com/embed/xa7qaSJeyRQ" style="display: block; margin: 0 auto;"></iframe>
        
        <p>Another practice to enhance your browsing security is to regularly update your browser and plugins. Software updates often include patches for security vulnerabilities that could otherwise be exploited by hackers. Ensuring that your browser and any installed plugins are up to date minimizes the risk of falling victim to attacks that exploit these weaknesses.</p>
        
        <p>Finally, be mindful of the information you share online. Avoid entering sensitive data, such as social security numbers or financial information, on websites that you don't fully trust. If a website requests such information, ensure that it is legitimate by verifying the domain name and researching the site if necessary. By following these secure browsing practices, you can significantly reduce your risk of encountering online threats and protect your personal and organizational data.</p>
`;
}
            }
        
function showfl(){
    
    document.getElementById('home').style.display = 'none';
    document.getElementById('action').style.display = 'none';
    document.getElementById('fl-statutes').style.display = 'block';
    document.getElementById('content-main').style.display = 'none';
}

function showhome(){
   
    
    document.getElementById('home').style.display = 'block';
            document.getElementById('content-main').style.display = 'none';
            document.getElementById('fl-statutes').style.display = 'none';
            document.getElementById('action').innerHTML = `
     <h3>Subscribe</h3>
                <p>Subscribe to our Newsletter:</p>
                <p><input type="text" placeholder="Your Email.." style="
    font-family: Arial, sans-serif; /* Font style */
    font-size: 16px; /* Font size */
    color: #333; /* Text color */
    background-color: #f9f9f9; /* Background color */
    border: 1px solid #ccc; /* Border style */
    border-radius: 4px; /* Rounded corners */
    padding: 10px; /* Padding inside the input box */
    width: 100%; /* Full width */
    max-width: 300px; /* Maximum width */
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
"/></p>
<button onclick="showContentOnBtn()" style="
background-color: #00703c; /* Button background color */
color: white; /* Text color */
border: none; /* Remove default border */
border-radius: 10px; /* Rounded corners */

font-size: 16px; /* Font size */
padding: 5px 15px; /* Padding inside the button */
cursor: pointer; /* Cursor style when hovering */
transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth color and transform transitions */
">

Subscribe
</button>
    `;
    document.getElementById('ref').innerHTML = `
    <li><a href="#">NIST Cybersecurity Framework</a></li>
                    <li><a href="#">Local Government Cybersecurity Act (F.S. 282.3185)</a></li>
                    <li><a href="#">Cybersecurity Best Practices</a></li>
        
    `;
    
}
