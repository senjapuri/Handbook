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
<li>Report the breach to relevant authorities as required by Florida’s Local Government Cybersecurity Act (F.S. 282.3185).</li>
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

        else if(r == 'manager' && w == 'ransomware')
            {
                document.getElementById('action').style.display = 'block';
                    document.getElementById('home').style.display = 'none';
                    document.getElementById('content-main').style.display = 'block';
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
        else
        {
            document.getElementById('home').style.display = 'block';
            document.getElementById('content-main').style.display = 'none';
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
            }
        
