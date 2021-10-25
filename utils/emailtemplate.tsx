export const resetPWDEmailTemplate = (resetLink: string) => {
    return `
    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head>
    <title></title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    
    </head>
    
    <body style="margin: 0%;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; height: 100vh;" width="100%">
        <tbody>
            <tr>
                <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; background-image: url('images/background_2.png'); background-position: center top; background-repeat: repeat;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="600">
                                        <tbody>
                                            <tr>
                                                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 15px;" width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tbody><tr>
                                                            <td style="padding-left:60px;padding-right:60px;padding-top:60px;width:100%;">
                                                                <div align="center" style="line-height:10px"><img alt="Main Image" src="https://intraline-bigcommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimg%2Flogo.df9d3aa3b75fd03ccfd3c30f53167e30.webp&amp;w=640&amp;q=75" style="display: block; height: auto; border: 0; width: 203px; max-width: 100%;" title="Main Image" width="203"></div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tbody><tr>
                                                            <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:18px;">
                                                                <div style="font-family: sans-serif">
                                                                    <div style="font-size: 14px; color: #ffffff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
                                                                        <p style="margin: 0; font-size: 14px; text-align: center;">
                                                                            <span style="font-size:30px;">Reset Your
                                                                                Password</span></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="5" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tbody><tr>
                                                            <td>
                                                                <div style="font-family: sans-serif">
                                                                    <div style="font-size: 14px; color: #ffffff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
                                                                        <p style="margin: 0; font-size: 14px; text-align: center;">
                                                                            We received a request to reset your
                                                                            password. Don’t worry,</p>
                                                                        <p style="margin: 0; font-size: 14px; text-align: center;">
                                                                            we are here to help you.</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tbody><tr>
                                                            <td style="padding-bottom:30px;padding-left:15px;padding-right:15px;padding-top:35px;text-align:center;">
                                                                <div align="center">
                                                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${resetLink}" style="height:46px;width:239px;v-text-anchor:middle;" arcsize="50%" strokeweight="1.5pt" strokecolor="#FFFFFF" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#fff; font-family:sans-serif; font-size:15px"><![endif]--><a href="${resetLink}" style="text-decoration:none;display:inline-block;color:#fff;background-color:transparent;border-radius:23px;width:auto;border-top:2px dotted #FFFFFF;border-right:2px dotted #FFFFFF;border-bottom:2px dotted #FFFFFF;border-left:2px dotted #FFFFFF;padding-top:5px;padding-bottom:5px;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:2px;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 15px; line-height: 30px;" style="font-size: 15px; line-height: 30px;"><strong>RESET
                                                                                        MY
                                                                                        PASSWORD</strong></span></span></span></a>
                                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tbody><tr>
                                                            <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                <div align="center">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
                                                                        <tbody><tr>
                                                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5A6BA8;">
                                                                                <span></span></td>
                                                                        </tr>
                                                                    </tbody></table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tbody><tr>
                                                            <td style="padding-bottom:40px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                                                <div style="font-family: sans-serif">
                                                                    <div style="font-size: 14px; color: #7f96ef; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
                                                                        <p style="margin: 0; font-size: 14px; text-align: center;">
                                                                            <strong>Didn’t request a password
                                                                                reset?</strong></p>
                                                                        <p style="margin: 0; font-size: 14px; text-align: center;">
                                                                            You can safely ignore this message.</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="600">
                                        <tbody>
                                            <tr>
                                                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 10px; padding-right: 10px; padding-top: 15px; padding-bottom: 15px;" width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tbody><tr>
                                                            <td style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" style="line-height:10px"><img alt="Your Logo" src="https://intraline-bigcommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimg%2Flogo.df9d3aa3b75fd03ccfd3c30f53167e30.webp&amp;w=640&amp;q=75" style="display: block; height: auto; border: 0; width: 145px; max-width: 100%;" title="Your Logo" width="145"></div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="15" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                        <tbody><tr>
                                                            <td>
                                                                <div style="font-family: sans-serif">
                                                                    <div style="font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; color: #4a60bb; line-height: 1.2;">
                                                                        <p style="margin: 0; font-size: 12px; text-align: center;">
                                                                            <span style="">Copyright © 2021 Intraline,
                                                                                All rights reserved.</span></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="html_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tbody><tr>
                                                            <td>
                                                                <div align="center" style="font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;">
                                                                    <div style="height-top: 20px;">&nbsp;</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </td>
            </tr>
        </tbody>
    </table><!-- End -->
    
    
    </body></html>
    `
}