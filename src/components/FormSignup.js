import axios from 'axios';
import classNames from 'classnames';
import { Formik } from 'formik';
import React, { Component } from 'react';
import Countdown from 'react-countdown';
import * as yup from 'yup';
import http from '../utils/http';
import ChartExample from '../components/charts';
import useSWR from 'swr';

const FormSignup = ({ post }) => {
	const { data } = useSWR(`https://api.apilayer.com/fixer/latest?symbols=USD%2CUER%2CCAD%2CNZD&base=VND`, {
		revalidateOnFocus: false
	});

	console.log('data', data);

	const initialValues = {
		name: '',
		email: '',
		phone_number: '',
		content: ''
	};
	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(6, 'Họ và tên ít nhất phải có 6 ký tự')
			.max(16, 'Họ và tên phải có nhiều nhất 16 ký tự')
			.required('Họ và tên là bắt buộc'),
		email: yup
			.string()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email là bắt buộc'),
		phone_number: yup
			.string()
			.min(10, 'Số điện thoại ít nhất phải có 10 ký tự')
			.matches(/^[0-9 +]+$/, 'Sdt invalid')
			.nullable(),
		content: yup
			.string()
			.min(6, 'Nội dung ít nhất phải có 6 ký tự')
			.max(66, 'Nội dung phải có nhiều nhất 16 ký tự')
			.required('Nội dung là bắt buộc')
			.nullable()
	});
	const onSubmit = async (values) => {
		const user = {
			name: values.name,
			email: values.email,
			phone_number: values.phone_number,
			content: values.content
		};
		console.log(user);
		const res = await http.post({
			url: `/advise`,
			data: user
		});
	};

	return (
		<section className="countdown-one">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="countdown-one__content">
							<h2 className="countdown-one__title">TẠI SAO PHẢI CHỌN TÂN CON ĐƯỜNG VÀNG ? </h2>
							<p className="countdown-one__tag-line">Du học tân con đường vàng nơi chấp cánh ước mơ</p>
							<p className="countdown-one__text">
								Là một công ty tư vấn du học hàng đầu ở Việt Nam, được các lãnh sự Mỹ, Úc, Canada tin cậy, là đại
								diện chính thức cho các trường trong hệ thống giáo dục của Mỹ, Anh, Úc, Canada, New Zealand,
								Singapore….
								<br />
								Đội ngũ nhân viên của New Golden Road đã từng làm việc nhiều năm trong môi trường giáo dục, với bề
								dày kinh nghiệm và kiến thức chuyên môn vững chắc sẽ góp tay chung sức chấp cánh cho ước mơ của
								các em học sinh – sinh viên Việt Nam bay cao hơn, đạt được khát vọng cũng như thành công mỹ mãn
								trên con đường sự nghiệp của mình và còn là các nhân tài cho đất nước hôm nay và mai sau.
								<br />
								New GOLDEN ROAD luôn đồng hành cùng du học sinh trong suốt chặn đường học tập tại các nước trên
								thế giới, đồng thời phối hợp cùng nhà trường, và các tổ chức giáo dục trên thế giới để hổ trợ các
								vấn đề khó khăn mà du học sinh gặp phải.
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="become-teacher__form" id="back-top">
							<div className="become-teacher__form-top">
								<h2 className="become-teacher__form-title">TƯ VẤN MIỄN PHÍ</h2>
							</div>
							<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
								{(post) => (
									<form
										onSubmit={post.handleSubmit}
										className="become-teacher__form-content contact-form-validated"
									>
										<input
											type="text"
											className={classNames('form-control', {
												'is-invalid': post.touched.name && post.errors.name
											})}
											placeholder="Họ và tên"
											id="name"
											name="name"
											onChange={post.handleChange}
											onBlur={post.handleBlur}
											value={post.values.name}
										/>
										{post.touched.name && post.errors.name && (
											<div id="invalid-feedback">{post.errors.name}</div>
										)}
										<input
											type="text"
											className={classNames('form-control', {
												'is-invalid': post.touched.email && post.errors.email
											})}
											placeholder="Email"
											id="email"
											name="email"
											onChange={post.handleChange}
											onBlur={post.handleBlur}
											value={post.values.email}
										/>
										{post.touched.email && post.errors.email && (
											<div id="invalid-feedback">{post.errors.email}</div>
										)}
										<input
											type="text"
											className={classNames('form-control', {
												'is-invalid': post.touched.phone_number && post.errors.phone_number
											})}
											placeholder="So dien thoai"
											id="phone_number"
											name="phone_number"
											onChange={post.handleChange}
											onBlur={post.handleBlur}
											value={post.values.phone_number}
										/>
										{post.touched.phone_number && post.errors.phone_number && (
											<div id="invalid-feedback">{post.errors.phone_number}</div>
										)}

										<textarea
											rows={4}
											className={classNames('form-control', {
												'is-invalid': post.touched.content && post.errors.content
											})}
											placeholder="Content"
											id="content"
											name="content"
											onChange={post.handleChange}
											onBlur={post.handleBlur}
											value={post.values.content}
										></textarea>
										{post.touched.content && post.errors.content && (
											<div id="invalid-feedback">{post.errors.content}</div>
										)}

										<button type="submit" className="tdm-btn become-teacher__form-btn">
											ĐĂNG KÝ
										</button>
									</form>
								)}
							</Formik>
							<div className="result text-center"></div>
						</div>
					</div>
				</div>
				<h2 className="countdown-one__tygia">TỶ GIÁ NGOẠI TỆ</h2>
				<div className="row">
					<div className="col-6">
						<ChartExample />
					</div>
					{data && (
						<div className="col-6">
							<div className="countdown-one__content-LuotTruyCap">
								<table className="table-ngoaite">
									<tr>
										<th>Mã Ngoại Tệ</th>
										<th>Tỷ Giá</th>
									</tr>
									<tr>
										<td>USD</td>
										<td>{1 / data.rates.USD}</td>
									</tr>
									<tr>
										<td>CAD</td>
										<td>{1 / data.rates.CAD}</td>
									</tr>
									<tr>
										<td>NZD</td>
										<td>{1 / data.rates.NZD}</td>
									</tr>
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
export default FormSignup;
